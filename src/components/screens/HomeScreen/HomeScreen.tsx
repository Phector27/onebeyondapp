import React, { useEffect, useState } from "react"
import { View, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from "react-native"
import Form from "../../common/Form/Form"
import { styles } from "./styles"

const HomeScreen: React.FunctionComponent = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true))
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false))
    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  })

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles(isKeyboardVisible).container}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles().logo}
            resizeMode="contain"
          />
          <Form />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen
