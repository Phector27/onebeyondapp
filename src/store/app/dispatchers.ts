import { DataResponse } from '../../api/types/app'
import {
  IGetInputDataAction,
  IGetInputDataActionSuccess,
  ISetSubmissionsDataAction,
  ISetTokenAction, 
  ISetLoginDataAction,
  ISetLoginDataActionSuccess,
  ISetLoginDataActionError, 
  IGetPhonesActionSuccess,
  IGetPhonesActionError,
  ICleanPhoneDetailsAction,
  ISetRegisterDataAction,
  ISetRegisterDataActionSuccess,
  IGetInputDataActionError,
  IGetPhonesAction,
  IGetPhoneDetailsAction,
  IGetPhoneDetailsActionSuccess,
  IGetPhoneDetailsActionError,
  ISetRegisterDataActionError
} from './actions'
import { AppActionTypes } from './types'
import { ICleanResponseAction } from './actions';

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

export const setTokenDispatchAction = (token: string): ISetTokenAction => ({
  type: AppActionTypes.SET_TOKEN,
  token
})

export const getPhonesDispatchAction = (token: string): IGetPhonesAction => ({
  type: AppActionTypes.GET_PHONES,
  token
})

export const getPhoneDetailsDispatchAction = (id: string, token: string): IGetPhoneDetailsAction => ({
  type: AppActionTypes.GET_PHONE_DETAILS,
  id,
  token
})

export const clearPhoneDetailsDispatchAction = (): ICleanPhoneDetailsAction => ({
  type: AppActionTypes.CLEAN_PHONE_DETAILS
})

export const setRegisterDataDispatchAction = (data: DataResponse.Sumbmission): ISetRegisterDataAction => ({
  type: AppActionTypes.SET_REGISTER_DATA,
  data
})

export const cleanResponseDispatchAction = (): ICleanResponseAction => ({
  type: AppActionTypes.CLEAN_RESPONSE
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

export const getInputDataDispatchActionError = (error: string): IGetInputDataActionError => ({
  type: AppActionTypes.GET_INPUT_DATA_ERROR,
  error
})

export const setLoginDataDispatchActionError = (error: string): ISetLoginDataActionError => ({
  type: AppActionTypes.SET_LOGIN_DATA_ERROR,
  error
})

export const getPhonesDispatchActionSuccess = (data: DataResponse.PhoneResults[]): IGetPhonesActionSuccess => ({
  type: AppActionTypes.GET_PHONES_SUCCESS,
  data
})

export const getPhonesDispatchActionError = (error: string | boolean): IGetPhonesActionError => ({
  type: AppActionTypes.GET_PHONES_ERROR,
  error
})

export const getPhoneDetailsDispatchActionSuccess = (data: DataResponse.PhoneResults): IGetPhoneDetailsActionSuccess => ({
  type: AppActionTypes.GET_PHONE_DETAILS_SUCCESS,
  data
})

export const getPhoneDetailsDispatchActionError = (error: string | boolean): IGetPhoneDetailsActionError => ({
  type: AppActionTypes.GET_PHONE_DETAILS_ERROR,
  error
})

export const setRegisterDataDispatchActionSuccess = (data: DataResponse.RegisterResults): ISetRegisterDataActionSuccess => ({
  type: AppActionTypes.SET_REGISTER_DATA_SUCCESS,
  data
})

export const setRegisterDataDispatchActionError = (error: string): ISetRegisterDataActionError => ({
  type: AppActionTypes.SET_REGISTER_DATA_ERROR,
  error
})
