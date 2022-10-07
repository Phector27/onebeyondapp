/* eslint-disable no-shadow */
import { DataResponse } from '../../api/types/app'
import {
  IGetInputDataAction,
  IGetInputDataActionSuccess,
  ISetSubmissionsDataAction
} from './actions'

/** Action Types * */
export enum AppActionTypes {
  GET_INPUT_DATA = 'APP@@GET_INPUT_DATA',
  GET_INPUT_DATA_SUCCESS = 'APP@@GET_INPUT_DATA_SUCCESS',
  SET_SUBMISSIONS_DATA = 'APP@@SET_SUBMISSIONS_DATA'
}

/** Action List **/
export type AppActions =
  | IGetInputDataAction
  | IGetInputDataActionSuccess
  | ISetSubmissionsDataAction

/** Default State Values **/
export const appDefaultState = (): AppState => ({ inputData: [], submissions: [] })

/** State **/
export interface AppState {
  inputData: DataResponse.InputField[]
  submissions: DataResponse.Sumbmission[]
}
