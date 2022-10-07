export interface INavigation {
  navigation: {
    goBack: () => void
    navigate: (route: string, params?: object) => void
  }
}
