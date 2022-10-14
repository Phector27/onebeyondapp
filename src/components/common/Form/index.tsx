import React, { useEffect, useState } from "react"
import { Alert, Linking, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { styles } from "./styles"
import Loader from "../Loader"
import UButton, { UButtonType } from "../Buttons"
import TextInput, { TextInputType } from "../TextInput"
import { IForm, IFormData } from './Interfaces'
import { URL, LOG_IN, REGISTER, FORGOT, SIGN_UP } from '../../../utils/constants'
import {
  getInputDataDispatchAction,
  setLoginDataDispatchAction,
  setRegisterDataDispatchAction,
} from "../../../store/app/dispatchers"
import { DefaultState } from "../../../store"
import { DataResponse } from "../../../api/types/app"

const Form: React.FunctionComponent<IForm> = ({
  handleLoadingSubmit,
  isLoginLoading,
  onHandleRegister,
}) => {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [userData, setUserData] = useState<IFormData | any>(undefined)

  const inputData = useSelector<DefaultState, DataResponse.InputField[]>(state => state.app.inputData)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInputDataDispatchAction())
  })

  const handleTextChange = (text: string | number, label: string) => {
    setUserData({
      ...userData,
      [label]: text,
    })
  }

  const getTextInputs = inputData.map((input) => {
    return (
      <TextInput
        style={styles.inputContainer}
        key={input.id}
        label={input.label}
        autoCapitalize="none"
        maxLength={input.maxLength}
        keyboardAppearance="default"
        placeholder={input.placeholder}
        value={userData ? userData[input.label] : ""}
        length={userData ? userData[input.label]?.length : 0}
        keyboardType={input.type === "text" ? "email-address" : "default"}
        onChangeText={(text) =>
          handleTextChange(text.toLowerCase().trim(), input.label)
        }
        type={
          input.type === "password"
            ? TextInputType.PASSWORD
            : TextInputType.TEXT
        }
      />
    )
  })

  const handleSubmitForm = () => {
    if (userData) {
      handleLoadingSubmit()
      if (isLogin) {
        dispatch(setLoginDataDispatchAction(userData))
      } else {
        dispatch(setRegisterDataDispatchAction(userData))
      }
    } else {
      Alert.alert("Please fill all fields")
    }
  }

  const handleRegister = () => {
    onHandleRegister()
    setIsLogin(false)
  }

  return inputData.length ? (
    <View style={styles.container}>
      {!isLogin && (
        <TextInput
          label="Name"
          placeholder="Name"
          style={styles.inputContainer}
          value={userData ? userData["Name"] : ""}
          length={userData ? userData["Name"]?.length : 0}
          onChangeText={(text) => handleTextChange(text, "Name")}
        />
      )}
      {getTextInputs}
      <UButton
        onPress={handleSubmitForm}
        style={styles.buttonStyle}
        isLoading={isLoginLoading}
        text={isLogin ? LOG_IN : REGISTER}
      />
      {isLogin ? (
        <>
          <UButton
            text={FORGOT}
            type={UButtonType.CLEAR}
            onPress={() => Linking.openURL(URL)}
          />
          <UButton
            text={`${SIGN_UP} 💛`}
            onPress={handleRegister}
            type={UButtonType.CLEAR}
          />
        </>
      ) : (
        <UButton
          text={`${LOG_IN} 🔑`}
          style={styles.logInBtn}
          type={UButtonType.CLEAR}
          onPress={() => setIsLogin(true)}
        />
      )}
    </View>
  ) : (
    <Loader />
  )
}

export default Form
