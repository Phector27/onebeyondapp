export interface IHomeScreen {
  navigation: {
    goBack: () => void
    navigate: (route: string, params?: object) => void
  }
}
