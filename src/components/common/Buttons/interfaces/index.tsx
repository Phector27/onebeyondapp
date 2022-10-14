import { TouchableOpacityProps } from "react-native"
import { UButtonType } from '../index'

export interface IUButton extends TouchableOpacityProps {
  onPress?: () => void
  text: string
  type?: UButtonType
  isLoading?: boolean
  noOpacity?: boolean
}
