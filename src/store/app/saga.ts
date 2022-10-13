import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { IGetInputDataAction, IGetPhonesAction, ISetLoginDataAction, IGetPhoneDetailsAction, ISetRegisterDataAction, IDeletePhoneAction, IEditPhoneAction, IAddNewPhoneAction } from './actions';
import { AppActions, AppActionTypes } from './types'
import { getInputDataDispatchActionSuccess, setLoginDataDispatchActionSuccess, setLoginDataDispatchActionError, getInputDataDispatchActionError, getPhonesDispatchActionSuccess, getPhonesDispatchActionError, getPhoneDetailsDispatchActionSuccess, getPhoneDetailsDispatchActionError, setRegisterDataDispatchAction, setRegisterDataDispatchActionSuccess, deletePhoneDispatchActionSuccess, deletePhoneDispatchActionError, editPhoneDispatchActionSuccess, editPhoneDispatchActionError, addPhoneDispatchActionSuccess, addPhoneDispatchActionError } from './dispatchers';
import { DataResponse } from '../../api/types/app';
import customData from '../../api/json/InputFields.json'
import { URL_LOGIN, URL_GET_PHONES, URL_GET_PHONE_DETAILS, URL_REGISTER, URL_REMOVE_PHONE, URL_EDIT_PHONE, URL_ADD_PHONE } from '../../utils/constants';

/** Initial Saga **/
export function* appSaga() {
  yield all([
    takeLatest(AppActionTypes.GET_INPUT_DATA, getInputData),
    takeLatest(AppActionTypes.SET_LOGIN_DATA, getLoginData),
    takeLatest(AppActionTypes.GET_PHONES, getPhones),
    takeLatest(AppActionTypes.GET_PHONE_DETAILS, getPhoneDetails),
    takeLatest(AppActionTypes.SET_REGISTER_DATA, getRegisterData),
    takeLatest(AppActionTypes.DELETE_PHONE, getDeletePhone),
    takeLatest(AppActionTypes.EDIT_PHONE, getEditPhone),
    takeLatest(AppActionTypes.ADD_NEW_PHONE, getAddNewPhone),
  ])
}

/** Saga functions **/
function* getInputData(action: IGetInputDataAction) {
  try {
    const response: DataResponse.Response = yield call(() => customData)

    yield put<AppActions>(getInputDataDispatchActionSuccess(response.inputFields))

  } catch (error: any) {
    console.log('Get Input Data Error: ', error)
    yield put<AppActions>(getInputDataDispatchActionError(error))
  }
}

function* getLoginData(action: ISetLoginDataAction) {
  const data = Object.keys(action.data).reduce((acc, key) => {
    acc[key.toLowerCase()] = action.data[key]
    return acc
  }, {} as { [key: string]: string })

  try {
    let responseData: DataResponse.LoginResults = yield call(
      () => fetch(URL_LOGIN, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Allow-Control-Allow-Methods': 'POST',
          },
          body: JSON.stringify(data)
      })
    .then(response => response.json())
    .then(result => responseData = result)
    .catch(error => console.log('error', error))
    )

    yield put<AppActions>(setLoginDataDispatchActionSuccess(responseData))

  } catch (error: any) {
    console.log('Get Login Data Error: ', error)
    yield put<AppActions>(setLoginDataDispatchActionError(error))
  }
}

function* getPhones(action: IGetPhonesAction) {
  try {
    let responseData: DataResponse.PhoneResults[] = yield call(
      () => fetch(URL_GET_PHONES, {
        method: 'GET',
        headers: {
          'auth-token': action.token,
          'Application-Type': 'application/json',
          'Access-Control-Allow-Methods': 'GET',
        },
      })
        .then(response => response.json())
        .then(result => responseData = result)
        .catch(error => console.log('error', error))
    )

    yield put<AppActions>(getPhonesDispatchActionSuccess(responseData))
  } catch (error: any) {
    console.log('Get Phones Data Error: ', error)
    yield put<AppActions>(getPhonesDispatchActionError(error))
  }
}

function* getPhoneDetails(action: IGetPhoneDetailsAction) {
  try {
    let responseData: DataResponse.PhoneResults = yield call(
      () => fetch(`${URL_GET_PHONE_DETAILS}/${action.id}`, {
        method: 'GET',
        headers: {
          'auth-token': action.token,
          'Application-Type': 'application/json',
          'Access-Control-Allow-Methods': 'GET',
        },
      })
        .then(response => response.json())
        .then(result => responseData = result)
        .catch(error => console.log('error', error))
    )

    yield put<AppActions>(getPhoneDetailsDispatchActionSuccess(responseData))
  } catch (error: any) {
    console.log('Get Phones Data Error: ', error)
    yield put<AppActions>(getPhoneDetailsDispatchActionError(error))
  }
}

function* getRegisterData(action: ISetRegisterDataAction) {
  const data = Object.keys(action.data).reduce((acc, key) => {
    acc[key.toLowerCase()] = action.data[key]
    return acc
  }, {} as { [key: string]: string })

  try {
    let responseData: DataResponse.RegisterResults = yield call(
      () => fetch(URL_REGISTER, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'POST',
          },
          body: JSON.stringify(data)
      })
    .then(response => response.json())
    .then(result => responseData = result)
    .catch(error => console.log('error', error))
    )

    yield put<AppActions>(setRegisterDataDispatchActionSuccess(responseData))

  } catch (error: any) {
    console.log('Get Login Data Error: ', error)
    yield put<AppActions>(setLoginDataDispatchActionError(error))
  }
}

function* getDeletePhone(action: IDeletePhoneAction) {
  try {
    let responseData: DataResponse.DeletePhoneResults = yield call(
      () => fetch(`${URL_REMOVE_PHONE}/${action.id}`, {
        method: 'DELETE',
        headers: {
          'auth-token': action.token,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'DELETE'
        },
      })
        .then(response => response.json())
        .then(result => responseData = result)
        .catch(error => console.log('error', error))
    )

    yield put<AppActions>(deletePhoneDispatchActionSuccess(responseData.message, responseData.id))

  } catch (error: any) {
    console.log('Delete Phone Error: ', error)
    yield put<AppActions>(deletePhoneDispatchActionError(error))
  }
}

function* getEditPhone(action: IEditPhoneAction) {
  console.log('action', action)
  try {
    let responseData: DataResponse.EditResults = yield call(
      () => fetch(`${URL_EDIT_PHONE}/${action.id}`, {
        method: 'PATCH',
        headers: {
          'auth-token': action.token,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'PATCH'
        },
        body: JSON.stringify(action.data)
      })
        .then(response => response.json())
        .then(result => responseData = result)
        .catch(error => console.log('error', error))
    )

    yield put<AppActions>(editPhoneDispatchActionSuccess(responseData))
    yield put<AppActions>(getPhoneDetailsDispatchActionSuccess(responseData))

  } catch (error: any) {
    console.log('Edit Phone Error: ', error)
    yield put<AppActions>(editPhoneDispatchActionError(error))
  }
}

function* getAddNewPhone(action: IAddNewPhoneAction) {
  console.log('action', action)
  try {
    let responseData: DataResponse.AddNewPhoneResult = yield call(
      () => fetch(URL_ADD_PHONE, {
        method: 'POST',
        headers: {
          'auth-token': action.token,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'POST'
        },
        body: JSON.stringify(action.data)
      })
        .then(response => response.json())
        .then(result => responseData = result)
        .catch(error => console.log('error', error))
    )

    console.log('responseData', responseData)

    yield put<AppActions>(addPhoneDispatchActionSuccess(responseData))

  } catch (error: any) {
    console.log('Add New Phone Error: ', error)
    yield put<AppActions>(addPhoneDispatchActionError(error))
  }
}
