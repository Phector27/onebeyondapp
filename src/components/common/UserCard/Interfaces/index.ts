import { ViewProps } from 'react-native'
import { DataResponse } from '../../../../api/types/app'

export interface IUserCard {
  user: DataResponse.Sumbmission
  index: number
}
