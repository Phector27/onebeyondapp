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

export interface ISetTokenAction {
  type: typeof AppActionTypes.SET_TOKEN
  token: string
}

export interface IGetPhonesAction {
  type: typeof AppActionTypes.GET_PHONES
  token: string
}

export interface IGetPhoneDetailsAction {
  type: typeof AppActionTypes.GET_PHONE_DETAILS
  id: string
  token: string
}

export interface ICleanPhoneDetailsAction {
  type: typeof AppActionTypes.CLEAN_PHONE_DETAILS
}

export interface ISetRegisterDataAction {
  type: typeof AppActionTypes.SET_REGISTER_DATA
  data: DataResponse.Sumbmission
}

export interface ICleanResponseAction {
  type: typeof AppActionTypes.CLEAN_RESPONSE
}


/** Actions **/
export interface IGetInputDataActionSuccess {
  type: typeof AppActionTypes.GET_INPUT_DATA_SUCCESS
  data: DataResponse.InputField[]
}

export interface IGetInputDataActionError {
  type: typeof AppActionTypes.GET_INPUT_DATA_ERROR
  error: string
}

export interface ISetLoginDataActionSuccess {
  type: typeof AppActionTypes.SET_LOGIN_DATA_SUCCESS
  data: DataResponse.LoginResults
}

export interface ISetLoginDataActionError {
  type: typeof AppActionTypes.SET_LOGIN_DATA_ERROR
  error: string
}

export interface IGetPhonesActionSuccess {
  type: typeof AppActionTypes.GET_PHONES_SUCCESS
  data: DataResponse.PhoneResults[]
}

export interface IGetPhonesActionError {
  type: typeof AppActionTypes.GET_PHONES_ERROR
  error: string | boolean
}

export interface IGetPhoneDetailsActionSuccess {
  type: typeof AppActionTypes.GET_PHONE_DETAILS_SUCCESS
  data: DataResponse.PhoneResults
}

export interface IGetPhoneDetailsActionError {
  type: typeof AppActionTypes.GET_PHONE_DETAILS_ERROR
  error: string | boolean
}

export interface ISetRegisterDataActionSuccess {
  type: typeof AppActionTypes.SET_REGISTER_DATA_SUCCESS
  data: DataResponse.RegisterResults
}

export interface ISetRegisterDataActionError {
  type: typeof AppActionTypes.SET_REGISTER_DATA_ERROR
  error: string | boolean
}
