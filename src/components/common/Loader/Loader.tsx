import React, { useEffect, useRef } from 'react'
import { ActivityIndicator, Animated, Text, View } from 'react-native'
import { bounceLoader } from './utils/BounceLoader'
import { styles } from './styles'

const Loader: React.FunctionComponent = () => {

  const bounceAnimation = useRef(new Animated.Value(200)).current

  useEffect(() => {
    bounceLoader(bounceAnimation)
  })

  return (
    <View
      style={styles().container}>
      <Animated.View
        style={styles(bounceAnimation).animatedContainer}>
        <ActivityIndicator size={75} color='#07EB00'/>
        <Text style={styles().textStyle}>
          Loading...
        </Text>
      </Animated.View>
    </View>
  )
}

export default Loader
