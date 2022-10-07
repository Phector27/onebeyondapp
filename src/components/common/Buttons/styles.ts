import { StyleSheet } from 'react-native'
import { UButtonType } from './Buttons'
import { WHITE, BLACK, GREY, FONT_SIZE_M, FONT_SIZE_SM } from '../../../utils/constants'

export const styles = (type?: UButtonType, buttonColor?: string) => StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: type === UButtonType.DEFAULT ? buttonColor : type === UButtonType.SECONDARY ? GREY : 'transparent',
  },
  text: {
    color: type === UButtonType.DEFAULT ? WHITE : BLACK,
    fontSize: type === UButtonType.DEFAULT || type === UButtonType.SECONDARY ? FONT_SIZE_M  : FONT_SIZE_SM, 
    letterSpacing: type === UButtonType.SECONDARY ? .5 : 0,
  }
})
