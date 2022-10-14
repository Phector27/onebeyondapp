import React, { useEffect, useState } from "react"
import {
  View,
  FlatList,
  BackHandler,
  Text,
  RefreshControl,
  ScrollView,
} from "react-native"
import RNRestart from "react-native-restart"
import { useDispatch, useSelector } from "react-redux"
import { styles } from "./styles"
import { IPhonesScreen } from "./Interfaces/index"
import Loader from "../../common/Loader"
import PhoneCard from "../../common/PhoneCard"
import AddNewPhoneForm from "../../common/AddNewPhoneForm"
import UButton, { UButtonType } from "../../common/Buttons"
import { DataResponse } from "../../../api/types/app"
import { DefaultState } from "../../../store/index"
import { getPhonesDispatchAction } from "../../../store/app/dispatchers"
import { removeAllData, getData } from "../../../utils/AsyncStorage"
import {
  EMPTY_SCREEN,
  PULL_DOWN,
  GREY,
  PRIMARY,
  PULLED,
  LOG_OUT,
  ADD_NEW_PHONE,
} from "../../../utils/constants"
import { isIpad } from "../../../utils/constants"

const PhonesScreen: React.FunctionComponent<IPhonesScreen> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isEmpty, setIsEmpty] = useState<boolean>(false)
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [addNewPhone, setAddNewPhone] = useState<boolean>(false)

  const token = useSelector<DefaultState, string>((state) => state.app.token!)
  const phonesList = useSelector<DefaultState, DataResponse.PhoneResults[]>(state => state.app.phones)

  useEffect(() => {
    obtainIfIsAdminUser()
  }, [])

  const obtainIfIsAdminUser = async () => {
    const isAdminUser = await getData("isAdmin")
    if (isAdminUser === "true") {
      setIsAdmin(true)
    }
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPhonesDispatchAction(token))
  }, [])

  useEffect(() => {
    if (phonesList.length) {
      setLoading(false)
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
      setTimeout(() => {
        setLoading(false)
      }, 3000) // force to show loader to get a better UX when the list is empty
    }
  }, [phonesList])

  const handleLogOut = () => {
    removeAllData()
    setTimeout(() => {
      RNRestart.Restart()
    }, 500)
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      handleLogOut()
      return true
    })

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", () => true)
    }
  }, [])

  const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout))
  }

  const handleRefreshControl = React.useCallback(() => {
    dispatch(getPhonesDispatchAction(token))
    setRefreshing(true)
    wait(2000).then(() => {
      setRefreshing(false)
    })
  }, [])

  const handleAddNewPhone = (value: boolean) => {
    setAddNewPhone(value)
  }

  return !loading ? (
    addNewPhone ? (
      <AddNewPhoneForm token={token} handleAddNewPhone={handleAddNewPhone} />
    ) : (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <UButton
            text={ADD_NEW_PHONE}
            type={UButtonType.SECONDARY}
            onPress={() => handleAddNewPhone(true)}
            style={[styles.addBtn, { display: isAdmin ? "flex" : "none" }]}
          />
          <UButton
            text={LOG_OUT}
            onPress={handleLogOut}
            style={styles.logOutBtn}
          />
        </View>
        <UButton
          noOpacity
          text="+"
          onPress={() => handleAddNewPhone(true)}
          style={[styles.addPlusBtn, { display: isAdmin ? "flex" : "none" }]}
        />
        <Text style={styles.pullToRefreshText}>{PULL_DOWN}</Text>
        {refreshing && <Text style={styles.pulledText}>{PULLED}</Text>}
        {!isEmpty ? (
          <FlatList
            data={phonesList}
            renderItem={({ item }) => (
              <PhoneCard item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item._id}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={handleRefreshControl}
                tintColor={PRIMARY}
              />
            }
          />
        ) : (
          <ScrollView
            contentContainerStyle={styles.emptyContainer}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={handleRefreshControl}
                tintColor={PRIMARY}
              />
            }
          >
            <Text style={styles.emptyText}>{EMPTY_SCREEN}</Text>
          </ScrollView>
        )}
      </View>
    )
  ) : (
    <Loader />
  )
}

export default PhonesScreen
