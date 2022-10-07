import { StyleSheet } from 'react-native'
import { WHITE, FONT_SIZE_M, GREY, FONT_SIZE_S } from '../../../utils/constants';

export const styles = (length?: number) => StyleSheet.create({
  inputContainerStyle: {
    borderBottomColor: 'transparent',
  },
  inputStyle: {
    height: 62,
    width: '90%',
    color: WHITE,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
    textAlign: 'center',
    paddingVertical:  10,
    fontSize: FONT_SIZE_M,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  inputPlaceholderStyle: {
    color: GREY,
    marginTop: 3,
    textAlign: 'left',
    fontSize: FONT_SIZE_M,
    opacity: length! > 0 ? 1 : .75,
  },
  labelStyle: {
    marginBottom: -10,
    fontSize: FONT_SIZE_S,
  }
})
