import React from "react"
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native"
import { styles } from "./styles"
import { IUButton } from "./interfaces"
import { BLACK, PRIMARY } from "../../../utils/constants"

export enum UButtonType {
  CLEAR = "buttton-clear",
  DEFAULT = "button-default",
  SECONDARY = "button-secondary",
}

const UButton: React.FunctionComponent<IUButton> = ({
  onPress,
  text,
  type = UButtonType.DEFAULT,
  isLoading,
  noOpacity,
  ...rest
}) => {
  const style = rest.style

  return (
    <TouchableOpacity
      style={[styles().container, style]}
      onPress={onPress}
      activeOpacity={noOpacity ? 0 : 0.2}
    >
      <View style={styles(type, PRIMARY).buttonContainer}>
        {isLoading ? (
          <ActivityIndicator color={BLACK} />
        ) : (
          <Text style={styles(type).text}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default UButton
