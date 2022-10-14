import { DataResponse } from "../../../../api/types/app"

export interface IPhoneCard {
  item: DataResponse.PhoneResults
  navigation: {
    navigate: (route: string, params?: object) => void
  }
}
