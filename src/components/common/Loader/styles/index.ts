import { Animated, StyleSheet } from "react-native"

export const styles = (isAnimated?: Animated.Value) => StyleSheet.create({
  container: {
    backgroundColor: '#111121',
  },
  animatedContainer: {
    transform: [{ translateY: isAnimated || undefined }],
  },
  textStyle: {
    fontSize: 50,
    color: '#FFFFFF',
    textAlign: 'center'
  }
})