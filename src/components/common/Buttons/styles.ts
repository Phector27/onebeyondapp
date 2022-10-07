import { StyleSheet } from 'react-native'
import { UButtonType } from './Buttons'
import { WHITE, BLACK, GREY, FONT_SIZE_M, FONT_SIZE_SM, FONT_SIZE_L } from '../../../utils/constants';

export const styles = (type?: UButtonType, buttonColor?: string) => StyleSheet.create({
  container: {
    height: 45,
    width: '50%',
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: type === UButtonType.DEFAULT ? buttonColor : type === UButtonType.SECONDARY ? GREY : 'transparent',
  },
  text: {
    fontWeight: 'bold',
    color: type === UButtonType.DEFAULT ? BLACK : WHITE,
    letterSpacing: type === UButtonType.SECONDARY ? .5 : 0,
    fontSize: type === UButtonType.DEFAULT || type === UButtonType.SECONDARY ? FONT_SIZE_L : FONT_SIZE_SM, 
  }
})
