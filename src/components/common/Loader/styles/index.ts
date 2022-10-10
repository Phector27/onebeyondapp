import { Animated, StyleSheet } from "react-native"
import { BLACK, PRIMARY } from '../../../../utils/constants';

export const styles = (isAnimated?: Animated.Value) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '50%',
    backgroundColor: BLACK,
  },
  animatedContainer: {
    transform: [{ translateY: isAnimated || undefined }],
  },
  textStyle: {
    fontSize: 30,
    color: PRIMARY,
    textAlign: 'center'
  }
})