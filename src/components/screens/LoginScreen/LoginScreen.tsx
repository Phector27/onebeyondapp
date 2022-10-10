import React, { useEffect, useState } from "react"
import { View, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Alert } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import { DataResponse } from "../../../api/types/app"
import { DefaultState } from '../../../store/index'
import Form from "../../common/Form/Form"
import CustomAlert from "../../common/Alert/Alert"
import { styles } from "./styles"
import { IHomeScreen } from './Interfaces/index';
import { storeData } from "../../../utils/AsyncStorage"
import { setTokenDispatchAction, cleanResponseDispatchAction } from '../../../store/app/dispatchers';
import { WELCOME_ACCESS } from '../../../utils/constants';

const HomeScreen: React.FunctionComponent<IHomeScreen> = ({ navigation }) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false)
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false)
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false)
  const [isRegister, setIsRegister] = useState<boolean>(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true))
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false))
    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  })

  const dispatch = useDispatch()

  const loginResponse = useSelector<DefaultState, DataResponse.LoginResults>(state => state.app.data!)
  const registerResponse = useSelector<DefaultState, DataResponse.RegisterResults>(state => state.app.registerData!)

  useEffect(() => {
    if (loginResponse !== undefined) {
      if (loginResponse?.error === null && loginResponse?.data.token) {
        navigation.navigate('PhonesScreen', { token: loginResponse?.data.token })
        storeData('token', loginResponse?.data.token)
        dispatch(setTokenDispatchAction(loginResponse?.data.token))
      } else {
        setIsAlertVisible(true)
      }
    }
    setIsLoginLoading(false)
  }, [loginResponse])

  useEffect(() => {
    if (registerResponse !== undefined) {
      if (registerResponse?.error === null) {
        setIsAlertVisible(true)
      } else {
        setIsAlertVisible(true)
      }
    }
    setIsLoginLoading(false)
  }, [registerResponse])
  
  const handleCloseAlert = () => {
    if (registerResponse?.error === null) {
      setIsRegister(false)
    }
    setIsAlertVisible(false)
    dispatch(cleanResponseDispatchAction())
  }

  const handleLoadingSubmit = () => {
    setIsLoginLoading(true)
  }

  const handleRegister = () => {
    setIsRegister(true)
  }

  console.log('registerResponse', registerResponse)

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {isAlertVisible
          ?
          <CustomAlert
            message={
              isRegister
                ? registerResponse?.data
                  ? WELCOME_ACCESS
                  : registerResponse?.error ?? ''
                : loginResponse?.error ?? ''
            }
            closeAlert={handleCloseAlert} />
          :
          <View style={styles(isKeyboardVisible).container}>
            <Image
              source={require("../../../assets/images/logo.png")}
              style={styles().logo}
              resizeMode="contain"
            />
            <Form
              isLoginLoading={isLoginLoading}
              handleLoadingSubmit={handleLoadingSubmit}
              navigation={navigation}
              onHandleRegister={handleRegister}
            />
          </View>
        }  
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen
