import { StyleSheet, Platform } from "react-native"
import { BLACK } from '../../../../utils/constants'

export const styles = (isKeyboardVisible?: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    backgroundColor: BLACK,
  },
  logo: {
    width: '100%',
    marginBottom: '10%',
    backgroundColor: BLACK,
  }
})