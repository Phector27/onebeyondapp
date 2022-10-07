/* eslint-disable @typescript-eslint/no-unused-vars */
import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { IGetInputDataAction } from './actions'
import { AppActions, AppActionTypes } from './types'
import { getInputDataDispatchActionSuccess } from './dispatchers'
import { DataResponse } from '../../api/types/app'
import customData from '../../api/json/InputFields.json'


/** Initial Saga **/
export function* appSaga() {
  yield all([
    takeLatest(AppActionTypes.GET_INPUT_DATA, getInputData)
  ])
}

/** Saga functions **/
function* getInputData(action: IGetInputDataAction) {
  try {
    const response: DataResponse.Response = yield call(() => customData)

    yield put<AppActions>(getInputDataDispatchActionSuccess(response.inputFields))

  } catch (error) { console.log('Get Input Data Error: ', error) }
}
