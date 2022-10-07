import { Animated, Easing } from "react-native"

export const rotateText = (spin: Animated.Value) => {
  Animated.timing(spin, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start()
}
