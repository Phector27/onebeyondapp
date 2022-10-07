import { combineReducers } from 'redux'
import { all } from '@redux-saga/core/effects'
import { AppState } from './app/types'
import { appSaga } from './app/saga'
import { appReducer } from './app/reducer'

/** Default State * */
export interface DefaultState {
  app: AppState
}

/** root Reducers * */
export const rootReducer = combineReducers({
  app: appReducer,
})

/** root Sagas * */
export function* rootSaga() {
  yield all([
    appSaga(),
  ])
}
