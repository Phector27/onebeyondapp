import React, { useEffect, useState } from "react"
import { Linking, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { getInputDataDispatchAction, setLoginDataDispatchAction } from '../../../store/app/dispatchers'
import { DefaultState } from "../../../store/index"
import { DataResponse } from '../../../api/types/app'
import { URL } from "../../../utils/constants"
import { IFormData } from "./Interfaces"
import { INavigation } from './Interfaces/index'
import Loader from "../Loader/Loader"
import UButton, { UButtonType } from "../Buttons/Buttons"
import TextInput, { TextInputType } from "../TextInput/TextInput"
import { styles } from "./styles"

const Form: React.FunctionComponent = () => {
  const [userData, setUserData] = useState<IFormData | any>(undefined)
  const [buttonLoading, setButtonLoading] = useState<boolean>(false)

  const inputData = useSelector<DefaultState, DataResponse.InputField[]>(state => state.app.inputData)

  const navigation: INavigation = useNavigation()
  
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

  const getTextImputs = inputData.map((input) => {
    return (
      <TextInput
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

  const handleSubmit = () => {
    setButtonLoading(true)
    if (userData) {
      dispatch(setLoginDataDispatchAction(userData))
    }
    setTimeout(() => {
      setButtonLoading(false)
    }, 2000)
  }

  return inputData.length ?
    <View style={styles.container}>
      {getTextImputs}
      <UButton
        text="Log In"
        onPress={handleSubmit}
        style={styles.buttonStyle}
        isLoading={buttonLoading}
      />
      <UButton
        text="Forgot your password?"
        onPress={() => Linking.openURL(URL)}
        type={UButtonType.CLEAR}
      />
    </View>
    : <Loader />
}

export default Form
