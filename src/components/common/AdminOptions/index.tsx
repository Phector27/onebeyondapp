import React from "react"
import { View, Text, TouchableOpacity, Alert, Platform } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import styles from "./styles"
import { IAdminOptions } from "./interfaces"
import {
  WHITE,
  RED,
  PRIMARY,
  REMOVE_PHONE,
  REMOVE_PHONE_CONFIRM,
  CANCEL,
  OK,
  EDITING_NOW,
  EDIT_PHONE,
  DELETE,
} from "../../../utils/constants"
import { DefaultState } from "../../../store"
import { DataResponse } from "../../../api/types/app"
import { deletePhoneDispatchAction } from "../../../store/app/dispatchers"

const AdminOptions: React.FunctionComponent<IAdminOptions> = ({ navigation, handleEdit, isEditing }) => {
  const dispatch = useDispatch()

  const token = useSelector<DefaultState, string>((state) => state.app.token!)
  const phoneDetails = useSelector<DefaultState, DataResponse.PhoneResults>(state => state.app.phoneDetails!)

  const deletePhone = () => {
    dispatch(deletePhoneDispatchAction(phoneDetails._id, token))
    navigation.goBack()
  }

  const openPrompt = () => {
    if (Platform.OS === "ios") {
      return Alert.prompt(
        REMOVE_PHONE,
        REMOVE_PHONE_CONFIRM,
        [
          {
            text: CANCEL,
            style: "cancel",
          },
          {
            text: OK,
            onPress: () => deletePhone(),
          },
        ],
        "default"
      )
    } else {
      return Alert.alert(
        REMOVE_PHONE,
        REMOVE_PHONE_CONFIRM,
        [
          {
            text: CANCEL,
            style: "cancel",
          },
          {
            text: OK,
            onPress: () => deletePhone(),
          },
        ],
        { cancelable: false }
      )
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleEdit(!isEditing)}
        style={[styles.adminBtn, { backgroundColor: isEditing ? PRIMARY : WHITE }]}
      >
        <Text style={styles.text}>{isEditing ? EDITING_NOW : EDIT_PHONE}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openPrompt}
        style={[styles.adminBtn, { backgroundColor: RED }]}
      >
        <Text style={styles.text}>{DELETE}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AdminOptions
