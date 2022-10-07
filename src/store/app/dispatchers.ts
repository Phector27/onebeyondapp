import { DataResponse } from '../../api/types/app'
import {
  IGetInputDataAction,
  IGetInputDataActionSuccess,
  ISetSubmissionsDataAction
} from './actions'
import { AppActionTypes } from './types'

/** Actions desde la vista */
export const getInputDataDispatchAction = (): IGetInputDataAction => ({
  type: AppActionTypes.GET_INPUT_DATA,
})

export const setSubmissionsDataDispatchAction = (data: DataResponse.Sumbmission): ISetSubmissionsDataAction => ({
  type: AppActionTypes.SET_SUBMISSIONS_DATA,
  data
})

/** Saga Actions desde sagas */
export const getInputDataDispatchActionSuccess = (data: DataResponse.InputField[]): IGetInputDataActionSuccess => ({
  type: AppActionTypes.GET_INPUT_DATA_SUCCESS,
  data
})
