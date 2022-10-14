import { StyleSheet, Platform, Dimensions } from "react-native"
import { BLACK, isIpad } from '../../../../utils/constants';

const { height } = Dimensions.get('screen')

export const styles = (isKeyboardVisible?: boolean) => StyleSheet.create({
  keyboardAvoid: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: '20%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    backgroundColor: BLACK,
    transform: [{ scale: isIpad ? 1.5 : 1}]
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: height * 0.1,
    backgroundColor: BLACK,
    marginTop: 40
  }
})