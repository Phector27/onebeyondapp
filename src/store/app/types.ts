/* eslint-disable no-shadow */
import { DataResponse } from '../../api/types/app'
import {
  IGetInputDataAction,
  IGetInputDataActionSuccess,
  ISetSubmissionsDataAction,
  ISetLoginDataAction,
  ISetLoginDataActionSuccess,
  ISetLoginDataActionError,
} from './actions'

/** Action Types * */
export enum AppActionTypes {
  GET_INPUT_DATA = 'APP@@GET_INPUT_DATA',
  GET_INPUT_DATA_SUCCESS = 'APP@@GET_INPUT_DATA_SUCCESS',
  SET_SUBMISSIONS_DATA = 'APP@@SET_SUBMISSIONS_DATA',
  SET_LOGIN_DATA = 'APP@@SET_LOGIN_DATA',
  SET_LOGIN_DATA_SUCCESS = 'APP@@SET_LOGIN_DATA_SUCCESS',
  SET_LOGIN_DATA_ERROR = 'APP@@SET_LOGIN_DATA_ERROR'
}

/** Action List **/
export type AppActions =
  | IGetInputDataAction
  | IGetInputDataActionSuccess
  | ISetSubmissionsDataAction
  | ISetLoginDataAction
  | ISetLoginDataActionSuccess
  | ISetLoginDataActionError

/** Default State Values **/
export const appDefaultState = (): AppState => ({ inputData: [] })

/** State **/
export interface AppState {
  inputData: DataResponse.InputField[]
  message?: string | null
  data?: DataResponse.LoginResults

}
