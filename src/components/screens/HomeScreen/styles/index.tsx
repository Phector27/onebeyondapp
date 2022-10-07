import { StyleSheet, Platform } from "react-native"

export const styles = (isKeyboardVisible?: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    paddingHorizontal: '5%',
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    backgroundColor: '#000000',
  }
})