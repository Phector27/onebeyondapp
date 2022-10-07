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

/** Actions **/

export interface IGetInputDataActionSuccess {
  type: typeof AppActionTypes.GET_INPUT_DATA_SUCCESS
  data: DataResponse.InputField[]
}
