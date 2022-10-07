import React from 'react'
import { Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { PRIMARY } from '../../../utils/constants'
import { styles } from './styles'

export enum UButtonType {
  CLEAR = 'buttton-clear',
  DEFAULT = 'button-default',
  SECONDARY = 'button-secondary',
}

interface iUButton extends TouchableOpacityProps {
  onPress?: () => void
  text: string
  type?: UButtonType
}

const UButton: React.FunctionComponent<iUButton> = ({ onPress, text, type = UButtonType.DEFAULT, ...rest }) => {
  const style = rest.style

  return (
    <TouchableOpacity
      style={[styles().container, style]}
      onPress={onPress}
      activeOpacity={0.2}>
      <View
        style={styles(type, PRIMARY).buttonContainer}>
        <Text style={styles(type).text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default UButton
