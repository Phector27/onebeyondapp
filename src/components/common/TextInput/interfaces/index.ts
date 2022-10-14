import { StyleProp, TextInputProps, ViewStyle } from "react-native"
import { TextInputType } from '../index'

export interface iTextInput extends TextInputProps {
  label: string
  length: number
  type?: TextInputType
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}
