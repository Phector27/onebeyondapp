import React from 'react'
import { Text, View, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native'
import { BLACK, PRIMARY } from '../../../utils/constants'
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
  isLoading?: boolean
}

const UButton: React.FunctionComponent<iUButton> = ({ onPress, text, type = UButtonType.DEFAULT, isLoading, ...rest }) => {
  const style = rest.style

  return (
    <TouchableOpacity
      style={[styles().container, style]}
      onPress={onPress}
      activeOpacity={0.2}>
      <View
        style={styles(type, PRIMARY).buttonContainer}>
        {isLoading
          ? <ActivityIndicator color={BLACK} />
          : <Text style={styles(type).text}>{text}</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default UButton
