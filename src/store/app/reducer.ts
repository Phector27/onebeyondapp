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
  }
  return state
}
