import React, { useEffect, useState } from "react"
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import RNRestart from "react-native-restart"
import { useSelector, useDispatch } from "react-redux"
import { styles } from "./styles"
import { IHomeScreen } from "./Interfaces/index"
import Form from "../../common/Form"
import CustomAlert from "../../common/Alert"
import {
  setTokenDispatchAction,
  cleanResponseDispatchAction,
  setIsAdminUserDispatchAction,
} from "../../../store/app/dispatchers"
import { DefaultState } from "../../../store/index"
import { DataResponse } from "../../../api/types/app"
import { storeData } from "../../../utils/AsyncStorage"
import { WELCOME_ACCESS, URL_LOGO, ERROR } from '../../../utils/constants'

const HomeScreen: React.FunctionComponent<IHomeScreen> = ({ navigation }) => {
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false)
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false)
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    )
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    )
    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  })

  const dispatch = useDispatch()

  const loginResponse = useSelector<DefaultState, DataResponse.LoginResults>(state => state.app.data!)
  const registerResponse = useSelector<DefaultState,DataResponse.RegisterResults>(state => state.app.registerData!)

  const handleLogin = () => {
    Platform.OS === "android" &&
      navigation.navigate("PhonesScreen", { token: loginResponse?.data.token })
    storeData("token", loginResponse?.data.token)
    storeData("isAdmin", `${loginResponse?.isAdmin}`)
    dispatch(setIsAdminUserDispatchAction(loginResponse?.isAdmin))
    dispatch(setTokenDispatchAction(loginResponse?.data.token))
    if (Platform.OS === "ios") {
      setTimeout(() => {
        RNRestart.Restart()
      }, 500)
    }
  }

  useEffect(() => {
    if (loginResponse !== undefined) {
      if (loginResponse?.error === null && loginResponse?.data.token) {
        handleLogin()
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles().keyboardAvoid}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {isAlertVisible ? (
          <CustomAlert
            message={
              isRegister
                ? registerResponse?.data
                  ? WELCOME_ACCESS
                  : registerResponse?.error ??
                    registerResponse?.message ??
                    ERROR
                : loginResponse?.error ?? ERROR
            }
            closeAlert={handleCloseAlert}
          />
        ) : (
          <View style={styles(isKeyboardVisible).container}>
            <Image
              resizeMode="contain"
              style={styles().logo}
              source={{ uri: URL_LOGO }}
            />
            <Form
              navigation={navigation}
              isLoginLoading={isLoginLoading}
              onHandleRegister={handleRegister}
              handleLoadingSubmit={handleLoadingSubmit}
            />
          </View>
        )}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen
