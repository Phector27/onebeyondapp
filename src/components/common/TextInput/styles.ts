import { StyleSheet, Dimensions } from 'react-native'
import { WHITE, FONT_SIZE_M, GREY, BLACK, FONT_SIZE_S, PRIMARY } from '../../../utils/constants';


const { height } = Dimensions.get('window')

export const styles = (length?: number, hasHalfPadding?: boolean) => StyleSheet.create({
  inputContainerStyle: {
    borderBottomColor: 'transparent',
  },
  inputStyle: {
    color: WHITE,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: FONT_SIZE_M,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255,255,255,0.25)',
    marginVertical: hasHalfPadding ? 5 : 10,
    paddingVertical: hasHalfPadding ? 5 : 10,
    height: hasHalfPadding ? height * .06 : 62,
  },
  inputPlaceholderStyle: {
    opacity: length! > 0 ? 1 : .75,
    color: BLACK,
    textAlign: 'left',
    fontSize: FONT_SIZE_M,
    marginTop: 3
  },
  labelStyle: {
    fontSize: FONT_SIZE_S,
    marginBottom: -10,
  }
})
