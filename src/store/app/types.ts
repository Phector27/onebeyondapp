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
  ICleanResponseAction,
  ISetIsAdminUserAction,
  IDeletePhoneAction,
  IDeletePhoneActionSuccess,
  IDeletePhoneActionError,
  IEditPhoneAction,
  IEditPhoneActionSuccess,
  IEditPhoneActionError,
  ICleanPhonesListAction,
  IAddNewPhoneAction,
  IAddNewPhoneActionSuccess,
  IAddNewPhoneActionError,
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
  SET_IS_ADMIN_USER = 'APP@@SET_IS_ADMIN_USER',
  DELETE_PHONE = 'APP@@DELETE_PHONE',
  DELETE_PHONE_SUCCESS = 'APP@@DELETE_PHONE_SUCCESS',
  DELETE_PHONE_ERROR = 'APP@@DELETE_PHONE_ERROR',
  EDIT_PHONE = 'APP@@EDIT_PHONE',
  EDIT_PHONE_SUCCESS = 'APP@@EDIT_PHONE_SUCCESS',
  EDIT_PHONE_ERROR = 'APP@@EDIT_PHONE_ERROR',
  CLEAN_PHONES_LIST = 'APP@@CLEAN_PHONES_LIST',
  ADD_NEW_PHONE = 'APP@@ADD_NEW_PHONE',
  ADD_NEW_PHONE_SUCCESS = 'APP@@ADD_NEW_PHONE_SUCCESS',
  ADD_NEW_PHONE_ERROR = 'APP@@ADD_NEW_PHONE_ERROR',
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
  | ISetIsAdminUserAction
  | IDeletePhoneAction
  | IDeletePhoneActionSuccess
  | IDeletePhoneActionError
  | IEditPhoneAction
  | IEditPhoneActionSuccess
  | IEditPhoneActionError
  | ICleanPhonesListAction
  | IAddNewPhoneAction
  | IAddNewPhoneActionSuccess
  | IAddNewPhoneActionError

/** Default State Values **/
export const appDefaultState = (): AppState => ({
  inputData: [],
  token: null,
  phones: [],
  inputDataError: null,
  loginDataError: null,
  getPhonesError: null,
  getPhoneDetailsError: null,
  isAdminUser: false,
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
  isAdminUser: boolean
}
