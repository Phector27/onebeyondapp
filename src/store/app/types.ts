/* eslint-disable no-shadow */
import { DataResponse } from '../../api/types/app'
import {
  IGetInputDataAction,
  IGetInputDataActionSuccess,
  IGetInputDataActionError,
  ISetSubmissionsDataAction,
  ISetLoginDataAction,
  ISetLoginDataActionSuccess,
  ISetLoginDataActionError,
  ISetTokenAction,
  IGetPhonesAction,
  IGetPhonesActionSuccess,
  IGetPhonesActionError,
  IGetPhoneDetailsAction,
  IGetPhoneDetailsActionSuccess,
  IGetPhoneDetailsActionError,
  ICleanPhoneDetailsAction,
  ISetRegisterDataAction,
  ISetRegisterDataActionSuccess,
  ISetRegisterDataActionError,
  ICleanResponseAction
} from './actions'

/** Action Types * */
export enum AppActionTypes {
  GET_INPUT_DATA = 'APP@@GET_INPUT_DATA',
  GET_INPUT_DATA_SUCCESS = 'APP@@GET_INPUT_DATA_SUCCESS',
  GET_INPUT_DATA_ERROR = 'APP@@GET_INPUT_DATA_ERROR',
  SET_SUBMISSIONS_DATA = 'APP@@SET_SUBMISSIONS_DATA',
  SET_LOGIN_DATA = 'APP@@SET_LOGIN_DATA',
  SET_LOGIN_DATA_SUCCESS = 'APP@@SET_LOGIN_DATA_SUCCESS',
  SET_LOGIN_DATA_ERROR = 'APP@@SET_LOGIN_DATA_ERROR',
  SET_TOKEN = 'APP@@SET_TOKEN',
  GET_PHONES = 'APP@@GET_PHONES',
  GET_PHONES_SUCCESS = 'APP@@GET_PHONES_SUCCESS',
  GET_PHONES_ERROR = 'APP@@GET_PHONES_ERROR',
  GET_PHONE_DETAILS = 'APP@@GET_PHONE_DETAILS',
  GET_PHONE_DETAILS_SUCCESS = 'APP@@GET_PHONE_DETAILS_SUCCESS',
  GET_PHONE_DETAILS_ERROR = 'APP@@GET_PHONE_DETAILS_ERROR',
  CLEAN_PHONE_DETAILS = 'APP@@CLEAN_PHONE_DETAILS',
  SET_REGISTER_DATA = 'APP@@SET_REGISTER_DATA',
  SET_REGISTER_DATA_SUCCESS = 'APP@@SET_REGISTER_DATA_SUCCESS',
  SET_REGISTER_DATA_ERROR = 'APP@@SET_REGISTER_DATA_ERROR',
  CLEAN_RESPONSE = 'APP@@CLEAN_RESPONSE',
}

/** Action List **/
export type AppActions =
  | IGetInputDataAction
  | IGetInputDataActionSuccess
  | IGetInputDataActionError
  | ISetSubmissionsDataAction
  | ISetLoginDataAction
  | ISetLoginDataActionSuccess
  | ISetLoginDataActionError
  | ISetTokenAction
  | IGetPhonesAction
  | IGetPhonesActionSuccess
  | IGetPhonesActionError
  | IGetPhoneDetailsAction
  | IGetPhoneDetailsActionSuccess
  | IGetPhoneDetailsActionError
  | ICleanPhoneDetailsAction
  | ISetRegisterDataAction
  | ISetRegisterDataActionSuccess
  | ISetRegisterDataActionError
  | ICleanResponseAction

/** Default State Values **/
export const appDefaultState = (): AppState => ({
  inputData: [],
  token: null,
  phones: [],
  inputDataError: null,
  loginDataError: null,
  getPhonesError: null,
  getPhoneDetailsError: null,
})

/** State **/
export interface AppState {
  inputData: DataResponse.InputField[]
  message?: string | null
  data?: DataResponse.LoginResults
  registerData?: DataResponse.RegisterResults
  token: string | null
  phones: DataResponse.PhoneResults[],
  phoneDetails?: DataResponse.PhoneResults
  inputDataError: null | string | boolean
  loginDataError: null | string | boolean
  getPhonesError: null | string | boolean 
  getPhoneDetailsError: null | string | boolean
}
