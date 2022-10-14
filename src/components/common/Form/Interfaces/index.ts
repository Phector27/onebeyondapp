export interface IFormData {
  [key: string]: string | number | any
}

export interface IForm {
  handleLoadingSubmit: () => void
  isLoginLoading: boolean
  navigation: INavigation
  onHandleRegister: () => void
}

export interface INavigation {
  navigate: (route: string, params?: object) => void
}
