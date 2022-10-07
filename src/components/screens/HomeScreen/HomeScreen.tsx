import React, { useEffect, useState } from "react"
import { View, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Alert } from "react-native"
import { useSelector } from "react-redux"
import { DataResponse } from "../../../api/types/app"
import { DefaultState } from '../../../store/index'
import Form from "../../common/Form/Form"
import CustomAlert from "../../common/Alert/Alert"
import { styles } from "./styles"

const HomeScreen: React.FunctionComponent = () => {
  const [ isKeyboardVisible, setKeyboardVisible ] = useState<boolean>(false)
  const [ isAlertVisible, setIsAlertVisible ] = useState<boolean>(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true))
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false))
    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  })

  const loginResponse = useSelector<DefaultState, DataResponse.LoginResults>(state => state.app.data!)

  useEffect(() => {
    if (loginResponse !== undefined) {
      if (loginResponse?.error === null && loginResponse?.data.token) {
        Alert.alert("Success", "You have successfully logged in")
      } else {
        setIsAlertVisible(true)
      }
    }
  }, [loginResponse])
  
  const handleCloseAlert = () => {
    setIsAlertVisible(false)
  }

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {isAlertVisible
          ?
          <CustomAlert message={loginResponse.error ?? ''} closeAlert={handleCloseAlert} />
          :
          <View style={styles(isKeyboardVisible).container}>
            <Image
              source={require("../../../assets/images/logo.png")}
              style={styles().logo}
              resizeMode="contain"
            />
            <Form />
          </View>
        }  
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen
