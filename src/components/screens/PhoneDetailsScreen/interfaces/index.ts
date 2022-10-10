export interface IPhoneDetailsScreen {
  navigation: {
    navigate: (screen: string, params?: object) => void
    goBack: () => void
  }
  route: { params: { id: string } }
}
