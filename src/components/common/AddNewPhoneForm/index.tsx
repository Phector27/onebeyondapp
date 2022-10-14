import React, { useEffect, useState } from "react"
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  BackHandler,
} from "react-native"
import { useDispatch } from "react-redux"
import styles from "./styles"
import UButton from "../Buttons"
import TextInput from "../TextInput"
import { IAddNewPhoneForm } from "./interfaces"
import { GO_BACK, ADD_PHONE, INTERNAL_ID, INTERNAL_CONTROL_ID, NAME, MANUFACTURER, DESCRIPTION, COLOR, PRICE, SCREEN, PROCESSOR, RAM, FILL_FIELDS } from '../../../utils/constants'
import { addPhoneDispatchAction } from "../../../store/app/dispatchers"

const AddNewPhoneForm: React.FunctionComponent<IAddNewPhoneForm> = ({
  token,
  handleAddNewPhone,
}) => {
  const [phone, setPhone] = useState({
    id: Math.random().toFixed(5),
    name: "",
    manufacturer: "",
    description: "",
    color: "",
    price: 0,
    screen: "",
    processor: "",
    ram: 0,
  })

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      handleAddNewPhone(false)
      return true
    })
  }, [])

  const dispatch = useDispatch()

  const handleAddPhone = () => {
    dispatch(addPhoneDispatchAction(token, phone))
    handleAddNewPhone(false)
  }

  const showButton = () => {
    if (
      phone.name &&
      phone.manufacturer &&
      phone.description &&
      phone.color &&
      phone.price &&
      phone.screen &&
      phone.processor &&
      phone.ram
    ) {
      return true
    } else {
      return false
    }
  }

  const handleClose = () => {
    handleAddNewPhone(false)
  }

  const validateDataType = (value: string, type: string) => {
    if (type === "number") {
      return !isNaN(Number(value))
    } else {
      return true
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoid}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <UButton
          text={GO_BACK}
          onPress={handleClose}
          style={styles.goBackBtn}
        />
        <Text style={styles.title}>{ADD_PHONE}:</Text>

        <TextInput
          value={phone.id}
          editable={false}
          style={styles.idInput}
          placeholder={INTERNAL_ID}
          length={phone?.id.length}
          label={INTERNAL_CONTROL_ID}
        />
        <TextInput
          label={NAME}
          value={phone.name}
          placeholder={NAME}
          style={styles.inputStyle}
          length={phone?.name.length}
          onChangeText={(text) => {
            validateDataType(text, "string")
              ? setPhone({ ...phone, name: text })
              : setPhone({ ...phone, name: "N/A" })
          }}
        />
        <TextInput
          label={MANUFACTURER}
          value={phone.manufacturer}
          placeholder={MANUFACTURER}
          style={styles.inputStyle}
          length={phone?.manufacturer.length}
          onChangeText={(text) => {
            validateDataType(text, "string")
              ? setPhone({ ...phone, manufacturer: text })
              : setPhone({ ...phone, manufacturer: "N/A" })
          }}
        />
        <TextInput
          multiline
          label={DESCRIPTION}
          value={phone.description}
          placeholder={DESCRIPTION}
          style={styles.inputMarginStyle}
          length={phone?.description.length}
          onChangeText={(text) => {
            validateDataType(text, "string")
              ? setPhone({ ...phone, description: text })
              : setPhone({ ...phone, description: "N/A" })
          }}
        />
        <TextInput
          label={COLOR}
          value={phone.color}
          placeholder={COLOR}
          style={styles.inputMarginStyle}
          length={phone?.color.length}
          onChangeText={(text) => {
            validateDataType(text, "string")
              ? setPhone({ ...phone, color: text })
              : setPhone({ ...phone, color: "N/A" })
          }}
        />
        <TextInput
          label={PRICE}
          placeholder={PRICE}
          keyboardType="numeric"
          style={styles.inputStyle}
          value={phone.price.toString()}
          length={phone?.price.toString().length}
          onChangeText={(text: any) => {
            validateDataType(text, "number")
              ? setPhone({ ...phone, price: Number(text) })
              : setPhone({ ...phone, price: 0 })
          }}
        />
        <TextInput
          label={SCREEN}
          value={phone.screen}
          placeholder={SCREEN}
          style={styles.inputStyle}
          length={phone?.screen.length}
          onChangeText={(text) => {
            validateDataType(text, "string")
              ? setPhone({ ...phone, screen: text })
              : setPhone({ ...phone, screen: "N/A" })
          }}
        />
        <TextInput
          label={PROCESSOR}
          value={phone.processor}
          placeholder={PROCESSOR}
          style={styles.inputStyle}
          length={phone?.processor.length}
          onChangeText={(text) => {
            validateDataType(text, "string")
              ? setPhone({ ...phone, processor: text })
              : setPhone({ ...phone, processor: "N/A" })
          }}
        />
        <TextInput
          label={RAM}
          placeholder={RAM}
          style={styles.inputStyle}
          value={phone.ram.toString()}
          length={phone?.ram.toString().length}
          keyboardType="numeric"
          onChangeText={(text: any) => {
            validateDataType(text, "number")
              ? setPhone({ ...phone, ram: Number(text) })
              : setPhone({ ...phone, ram: 0 })
          }}
        />

        {showButton() ? (
          <UButton
            text={ADD_PHONE}
            onPress={handleAddPhone}
            style={styles.addBtn}
          />
        ) : (
          <Text style={styles.alertText}>{FILL_FIELDS}</Text>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AddNewPhoneForm
