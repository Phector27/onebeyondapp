import React, { useState } from 'react'
import { StyleProp, TextInputProps, ViewStyle } from 'react-native'
import { Input, Icon } from 'react-native-elements'
import { styles } from './styles'
import { PRIMARY, GREY } from '../../../utils/constants';

export enum TextInputType {
  TEXT,
  PASSWORD,
  PICK
}

interface iTextInput extends TextInputProps {
  label: string
  length: number
  type?: TextInputType
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const TextInput: React.FunctionComponent<iTextInput> = ({ type, length, label, style, onPress, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Input
      {...rest}
      autoCorrect={false}
      label={length > 0 ? label : ''}
      labelStyle={styles().labelStyle}
      autoCapitalize="none"
      placeholderTextColor={GREY}
      keyboardAppearance="default"
      autoCompleteType={undefined}
      containerStyle={[styles(0).inputStyle, style, { height: 60 }]}
      inputContainerStyle={styles().inputContainerStyle}
      inputStyle={styles(length).inputPlaceholderStyle}
      secureTextEntry={type === TextInputType.PASSWORD && !showPassword}
      rightIcon={
        type === TextInputType.PASSWORD &&
        <Icon
          type="ionicon"
          size={25}
          color={PRIMARY}
          tvParallaxProperties={null}
          onPress={() => setShowPassword(!showPassword)}
          name={showPassword ? 'eye-outline' : 'eye-off-outline'}
        />
      }
    />
  )
}

export default TextInput
