export interface IAdminOptions {
  navigation: {
    navigate: (route: string, params?: object) => void
    goBack: () => void
  }
  handleEdit: (value: boolean) => void
  isEditing: boolean
}
