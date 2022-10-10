import { Reducer } from "redux"
import { produce } from "immer"
import { AppState, AppActions, appDefaultState, AppActionTypes } from "./types"

export const appReducer: Reducer<AppState, AppActions> = (
  state = appDefaultState(),
  action: AppActions
) => {
  switch (action.type) {
    case AppActionTypes.GET_INPUT_DATA_SUCCESS:
      return produce(state, (copyState: AppState) => {
        copyState.inputData = action.data
      })
    case AppActionTypes.SET_LOGIN_DATA_SUCCESS:
      return produce(state, (copyState: AppState) => {
        copyState.data = action.data
      })
    case AppActionTypes.SET_TOKEN:
      return produce(state, (copyState: AppState) => {
        copyState.token = action.token
      })
    case AppActionTypes.GET_PHONES_SUCCESS:
      return produce(state, (copyState: AppState) => {
        copyState.phones = action.data
      })
    case AppActionTypes.GET_PHONE_DETAILS_SUCCESS:
      return produce(state, (copyState: AppState) => {
        copyState.phoneDetails = action.data
      })
    case AppActionTypes.CLEAN_PHONE_DETAILS:
      return produce(state, (copyState: AppState) => {
        copyState.phoneDetails = undefined
      })
    case AppActionTypes.SET_REGISTER_DATA_SUCCESS:
      return produce(state, (copyState: AppState) => {
        copyState.registerData = action.data
      })
    case AppActionTypes.CLEAN_RESPONSE:
      return produce(state, (copyState: AppState) => {
        copyState.data = undefined
        copyState.registerData = undefined
      })
  }
  return state
}
