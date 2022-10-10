export interface IPhonesScreen {
  navigation: {
    goBack: () => void
    navigate: (route: string, params?: object) => void
  }
}
