import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  BackHandler,
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import styles from "./styles"
import { IPhoneDetailsScreen } from "./interfaces"
import Loader from "../../common/Loader"
import UButton from "../../common/Buttons"
import CustomAlert from "../../common/Alert"
import AdminOptions from "../../common/AdminOptions"
import {
  getPhoneDetailsDispatchAction,
  clearPhoneDetailsDispatchAction,
  editPhoneDispatchAction,
} from "../../../store/app/dispatchers"
import { DefaultState } from "../../../store"
import { DataResponse } from "../../../api/types/app"
import {
  WHITE,
  SPECS,
  COLOR,
  PROCESSOR,
  RAM,
  PRICE,
  TITLE,
} from "../../../utils/constants"
import { getData } from "../../../utils/AsyncStorage"
import { MANUFACTURER, DESCRIPTION, SCREEN } from "../../../utils/constants"

const PhoneDetailsScreen: React.FunctionComponent<IPhoneDetailsScreen | any> = ({
  navigation,
  route,
}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const token = useSelector<DefaultState, string>((state) => state.app.token!)
  const phoneDetails = useSelector<DefaultState, DataResponse.PhoneResults>(state => state.app.phoneDetails!)

  const [phoneName, setPhoneName] = useState<string>("")
  const [phoneDescription, setPhoneDescription] = useState<string>("")
  const [phonePrice, setPhonePrice] = useState<number>(0)
  const [phoneColor, setPhoneColor] = useState<string>("")
  const [phoneScreen, setPhoneScreen] = useState<string>("")
  const [phoneProcessor, setPhoneProcessor] = useState<string>("")
  const [phoneRam, setPhoneRam] = useState<number>(0)
  const [phoneManufacturer, setPhoneManufacturer] = useState<string>("")
  const [phoneId, setPhoneId] = useState<string>("")

  const dispatch = useDispatch()

  useEffect(() => {
    if (!route.params) {
      navigation.goBack()
    } else {
      dispatch(getPhoneDetailsDispatchAction(route?.params?.id, token))
    }

    return () => {
      dispatch(clearPhoneDetailsDispatchAction())
    }
  }, [])

  useEffect(() => {
    if (phoneDetails?.name) {
      setPhoneName(phoneDetails.name)
      setPhoneDescription(phoneDetails.description)
      setPhonePrice(phoneDetails.price)
      setPhoneColor(phoneDetails.color)
      setPhoneScreen(phoneDetails.screen)
      setPhoneProcessor(phoneDetails.processor)
      setPhoneRam(phoneDetails.ram)
      setPhoneManufacturer(phoneDetails.manufacturer)
      setPhoneId(phoneDetails._id)
      setLoading(false)
    }
  }, [phoneDetails])

  useEffect(() => {
    obtainIfIsAdminUser()
  }, [])

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      navigation.navigate("PhonesScreen")
      return true
    })
  }, [])

  const obtainIfIsAdminUser = async () => {
    const isAdminUser = await getData("isAdmin")
    if (isAdminUser === "true") {
      setIsAdmin(true)
    }
  }

  const handleEdit = (value: boolean) => {
    setIsEditing(value)
  }

  const handleEditDispatch = () => {
    const phone = {
      id: phoneDetails.id!,
      name: phoneName,
      manufacturer: phoneManufacturer,
      description: phoneDescription,
      color: phoneColor,
      price: phonePrice,
      screen: phoneScreen,
      processor: phoneProcessor,
      ram: phoneRam,
    }

    dispatch(editPhoneDispatchAction(token, phone, phoneDetails._id))
    setIsEditing(false)
  }

  return phoneDetails?.message && phoneDetails?.message?.length > 0 ? (
    <CustomAlert
      message={phoneDetails?.message ?? "Error"}
      closeAlert={() => {
        navigation.navigate("PhonesScreen")
      }}
    />
  ) : !loading && phoneName ? (
    <ScrollView style={styles.container}>
      {isAdmin && (
        <AdminOptions
          navigation={navigation}
          handleEdit={handleEdit}
          isEditing={isEditing}
        />
      )}
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: phoneDetails.imageFileName }}
      />
      {!isEditing ? (
        <>
          <Text style={styles.title}>{phoneDetails.name}</Text>
          <Text style={styles.description}>{phoneDetails.description}</Text>
          <View style={styles.specsContainer}>
            <Text style={styles.specsTitle}>{SPECS}</Text>
            <View style={styles.colorContainer}>
              <Text style={styles.specTitle}>{COLOR}: </Text>
              <Text style={styles.specText}>{phoneDetails.color}</Text>
            </View>
            <View style={styles.processorAndPriceContainer}>
              <Text style={styles.specTitle}>{PROCESSOR}: </Text>
              <Text style={styles.specText}>{phoneDetails.processor}</Text>
            </View>
            <View style={styles.ramContainer}>
              <Text style={styles.specTitle}>{RAM}: </Text>
              <Text style={styles.specText}>{phoneDetails.ram}GB</Text>
            </View>
            <View style={styles.processorAndPriceContainer}>
              <Text style={styles.specTitle}>{PRICE}: </Text>
              <Text style={styles.specText}>{phoneDetails.price}$</Text>
            </View>
          </View>
        </>
      ) : (
        <View style={styles.editContainer}>
          <View style={styles.editTitleContainer}>
            <Text style={styles.editTitle}>{TITLE}: </Text>
            <TextInput
              value={phoneName}
              style={styles.inputName}
              onChangeText={(text) => setPhoneName(text)}
            />
          </View>
          <View style={styles.editTitleContainer}>
            <Text style={styles.editTitle}>{MANUFACTURER}: </Text>
            <TextInput
              value={phoneManufacturer}
              style={styles.editInput}
              onChangeText={(text) => setPhoneManufacturer(text)}
            />
          </View>
          <View style={styles.editTitleContainer}>
            <Text style={styles.editTitle}>{DESCRIPTION}: </Text>
            <TextInput
              multiline
              value={phoneDescription}
              style={styles.editDescription}
              onChangeText={(text) => setPhoneDescription(text)}
            />
          </View>
          <View style={styles.editTitleContainer}>
            <Text style={styles.editTitle}>{PRICE}: </Text>
            <TextInput
              style={styles.editInput}
              value={phonePrice?.toString()}
              keyboardType="numeric"
              onChangeText={(text) => {
                if (text.length > 0) {
                  const number = parseInt(text)
                  if (number) {
                    setPhonePrice(number)
                  }
                } else {
                  setPhonePrice(0)
                }
              }}
            />
          </View>
          <View style={styles.editSpecsContainer}>
            <Text style={styles.editTitle}>{SPECS}: </Text>
            <View style={[styles.editTextStyle, { marginTop: 5 }]}>
              <Text style={styles.editSpecTextTitle}>{COLOR}: </Text>
              <TextInput
                value={phoneColor}
                style={{ color: WHITE }}
                onChangeText={(text) => setPhoneColor(text)}
              />
            </View>
            <View style={styles.editTextStyle}>
              <Text style={styles.editSpecTextTitle}>{PROCESSOR}: </Text>
              <TextInput
                value={phoneProcessor}
                style={{ color: WHITE }}
                onChangeText={(text) => setPhoneProcessor(text)}
              />
            </View>
            <View style={styles.editTextStyle}>
              <Text style={styles.editSpecTextTitle}>{SCREEN}: </Text>
              <TextInput
                value={phoneScreen}
                style={{ color: WHITE }}
                onChangeText={(text) => setPhoneScreen(text)}
              />
            </View>
            <View style={styles.editTextStyle}>
              <Text style={styles.editSpecTextTitle}>{RAM}: </Text>
              <TextInput
                keyboardType="numeric"
                style={{ color: WHITE }}
                value={phoneRam.toString()}
                onChangeText={(text) => {
                  if (text.length > 0) {
                    const number = parseInt(text)
                    if (number) {
                      setPhoneRam(number)
                    }
                  } else {
                    setPhoneRam(0)
                  }
                }}
              />
            </View>
          </View>
          <UButton
            text="Save"
            style={styles.saveBtn}
            onPress={handleEditDispatch}
          />
        </View>
      )}
    </ScrollView>
  ) : (
    <Loader />
  )
}

export default PhoneDetailsScreen
