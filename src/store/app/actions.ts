import { AppActionTypes } from './types'
import { DataResponse } from '../../api/types/app'

/** Saga Actions **/
export interface IGetInputDataAction {
  type: typeof AppActionTypes.GET_INPUT_DATA
}

export interface ISetSubmissionsDataAction {
  type: typeof AppActionTypes.SET_SUBMISSIONS_DATA
  data: DataResponse.Sumbmission
}

export interface ISetLoginDataAction {
  type: typeof AppActionTypes.SET_LOGIN_DATA
  data: DataResponse.Sumbmission
}

/** Actions **/

export interface IGetInputDataActionSuccess {
  type: typeof AppActionTypes.GET_INPUT_DATA_SUCCESS
  data: DataResponse.InputField[]
}

export interface ISetLoginDataActionSuccess {
  type: typeof AppActionTypes.SET_LOGIN_DATA_SUCCESS
  data: DataResponse.LoginResults
}

export interface ISetLoginDataActionError {
  type: typeof AppActionTypes.SET_LOGIN_DATA_ERROR
  error: string
}
