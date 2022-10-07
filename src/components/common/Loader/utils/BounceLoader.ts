import { Animated } from "react-native"

export const bounceLoader = (bounceAnimation: Animated.Value) => {
  Animated.spring(bounceAnimation, {
    toValue: 0,
    friction: 1,
    tension: 10,
    useNativeDriver: true,
  }).start()
}
