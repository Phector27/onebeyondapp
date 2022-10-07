import { StyleSheet } from "react-native"
import { PRIMARY, GREY, BLACK, FONT_SIZE_L, FONT_SIZE_XL } from '../../../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 100
  },
  inputStyle: {
    color: GREY,
  },
  buttonContainer: {
    width: '40%',
    marginVertical: FONT_SIZE_XL,
    alignSelf: 'center'
  },
  buttonStyle: {
    backgroundColor: PRIMARY
  },
  buttonTitleStyle: {
    fontSize: FONT_SIZE_L,
    color: BLACK,
    fontWeight: '600'
  }
})