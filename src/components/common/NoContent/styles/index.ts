import { Animated, StyleSheet } from "react-native"

export const styles = (spin?: Animated.AnimatedInterpolation ) => StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#111121'
  },
  animatedContainer: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#111121',
    transform: [{ rotate: spin ? spin : '0deg' }]
  },
  textStyle: {
    fontSize: 40,
    color: '#FFFFFF',
    textAlign: 'center'
  }
})