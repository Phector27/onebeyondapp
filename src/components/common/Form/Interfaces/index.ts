export interface IFormData {
  [key: string]: string | number | any
}

export interface INavigation {
  navigate: (route: string, params?: object) => void
}
