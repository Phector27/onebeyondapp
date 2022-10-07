import React, { useEffect, useRef } from 'react'
import { Animated, Text, View } from 'react-native'
import { rotateText } from './utils/RotateText'
import { styles } from './styles'

const NoContent: React.FunctionComponent = () => {

  const spinAnimation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    rotateText(spinAnimation)
  }, [])

  const spin = spinAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles().container}>
    <Animated.View
      style={styles(spin).animatedContainer}>
      <Text style={styles().textStyle}>
          No content 🤦‍♂️{'\n\n'}
          Please submit a user and go here again.
      </Text>
    </Animated.View>
  </View>
  )
}

export default NoContent
