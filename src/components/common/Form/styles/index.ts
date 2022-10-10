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
    alignSelf: 'center',
    marginVertical: FONT_SIZE_XL,
  },
  buttonStyle: {
    marginTop: '15%',
    backgroundColor: PRIMARY,
  },
  buttonTitleStyle: {
    color: BLACK,
    fontWeight: '600',
    fontSize: FONT_SIZE_L,
  }
})