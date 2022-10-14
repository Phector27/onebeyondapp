import React, { useEffect, useState } from "react"
import { Alert, Linking, Platform, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { getInputDataDispatchAction, setLoginDataDispatchAction, setRegisterDataDispatchAction } from '../../../store/app/dispatchers';
import { DefaultState } from "../../../store/index"
import { DataResponse } from '../../../api/types/app'
import { URL } from "../../../utils/constants"
import { IFormData, INavigation } from "./Interfaces"
import Loader from "../Loader/Loader"
import UButton, { UButtonType } from "../Buttons/Buttons"
import TextInput, { TextInputType } from "../TextInput/TextInput"
import { styles } from "./styles"

interface IForm {
  handleLoadingSubmit: () => void
  isLoginLoading: boolean
  navigation: INavigation
  onHandleRegister: () => void
}

const Form: React.FunctionComponent<IForm> = ({ handleLoadingSubmit, isLoginLoading, navigation, onHandleRegister }) => {
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
        onChangeText={(text) => handleTextChange(text.toLowerCase().trim(), input.label)}
        type={input.type === "password" ? TextInputType.PASSWORD : TextInputType.TEXT}
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

  return inputData.length ?
    <View style={styles.container}>
      {!isLogin &&
        <TextInput
          label="Name"
          length={userData ? userData['Name']?.length : 0}
          onChangeText={(text) => handleTextChange(text, "Name")}
          value={userData ? userData['Name'] : ""}
          placeholder="Name"
          style={styles.inputContainer}
        />
      }
      {getTextInputs}
      <UButton
        text={isLogin ? "Log In" : "Register"}
        onPress={handleSubmitForm}
        style={styles.buttonStyle}
        isLoading={isLoginLoading}
      />
      {isLogin ?
        <>
          <UButton
            text="Forgot your password?"
            onPress={() => Linking.openURL(URL)}
            type={UButtonType.CLEAR}
          />
          <UButton
            text="Sign Up 💛"
            onPress={handleRegister}
            type={UButtonType.CLEAR}
          />
        </>  
        :
        <UButton text="Log In 🔑"
          onPress={() => setIsLogin(true)}
          type={UButtonType.CLEAR}
          style={{marginVertical: '5%'}}
        />
      }
    </View>
    : <Loader />
}

export default Form
