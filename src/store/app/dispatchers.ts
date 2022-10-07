import { DataResponse } from '../../api/types/app'
import {
  IGetInputDataAction,
  IGetInputDataActionSuccess,
  ISetSubmissionsDataAction
} from './actions'
import { AppActionTypes } from './types'
import { ISetLoginDataAction, ISetLoginDataActionSuccess, ISetLoginDataActionError } from './actions';

/** Actions desde la vista */
export const getInputDataDispatchAction = (): IGetInputDataAction => ({
  type: AppActionTypes.GET_INPUT_DATA,
})

export const setSubmissionsDataDispatchAction = (data: DataResponse.Sumbmission): ISetSubmissionsDataAction => ({
  type: AppActionTypes.SET_SUBMISSIONS_DATA,
  data
})

export const setLoginDataDispatchAction = (data: DataResponse.Sumbmission): ISetLoginDataAction => ({
  type: AppActionTypes.SET_LOGIN_DATA,
  data
})

/** Saga Actions desde sagas */
export const getInputDataDispatchActionSuccess = (data: DataResponse.InputField[]): IGetInputDataActionSuccess => ({
  type: AppActionTypes.GET_INPUT_DATA_SUCCESS,
  data
})

export const setLoginDataDispatchActionSuccess = (data: DataResponse.LoginResults): ISetLoginDataActionSuccess => ({
  type: AppActionTypes.SET_LOGIN_DATA_SUCCESS,
  data
})

export const setLoginDataDispatchActionError = (error: string): ISetLoginDataActionError => ({
  type: AppActionTypes.SET_LOGIN_DATA_ERROR,
  error
})
