/* eslint-disable @typescript-eslint/no-unused-vars */
import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { IGetInputDataAction, ISetLoginDataAction } from './actions';
import { AppActions, AppActionTypes } from './types'
import { getInputDataDispatchActionSuccess, setLoginDataDispatchActionSuccess } from './dispatchers';
import { DataResponse, Sumbmission } from '../../api/types/app';
import customData from '../../api/json/InputFields.json'


/** Initial Saga **/
export function* appSaga() {
  yield all([
    takeLatest(AppActionTypes.GET_INPUT_DATA, getInputData),
    takeLatest(AppActionTypes.SET_LOGIN_DATA, getLoginData),
  ])
}

/** Saga functions **/
function* getInputData(action: IGetInputDataAction) {
  try {
    const response: DataResponse.Response = yield call(() => customData)

    yield put<AppActions>(getInputDataDispatchActionSuccess(response.inputFields))

  } catch (error) { console.log('Get Input Data Error: ', error) }
}

function* getLoginData(action: ISetLoginDataAction) {

  const data = Object.keys(action.data).reduce((acc, key) => {
    acc[key.toLowerCase()] = action.data[key]
    return acc
  }, {} as { [key: string]: string })

  const url = 'https://onebeyond-hector.herokuapp.com/auth/login'
  try {
    let responseData: DataResponse.LoginResults = yield call(
      () => fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
    .then(response => response.json())
    .then(result => responseData = result)
    .catch(error => console.log('error', error))
    )

    yield put<AppActions>(setLoginDataDispatchActionSuccess(responseData))

  } catch (error) {
    console.log('Get Login Data Error: ', error)
  }
}
