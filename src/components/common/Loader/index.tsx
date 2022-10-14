import React, { useEffect, useRef } from "react"
import { ActivityIndicator, Animated, Text, View } from "react-native"
import { styles } from "./styles"
import { PRIMARY, LOADING } from "../../../utils/constants"
import { bounceLoader } from "./utils/BounceLoader"

const Loader: React.FunctionComponent = () => {
  const bounceAnimation = useRef(new Animated.Value(200)).current

  useEffect(() => {
    bounceLoader(bounceAnimation)
  })

  return (
    <View style={styles().container}>
      <Animated.View style={styles(bounceAnimation).animatedContainer}>
        <ActivityIndicator size={50} color={PRIMARY} />
        <Text style={styles().textStyle}>{LOADING}</Text>
      </Animated.View>
    </View>
  )
}

export default Loader
