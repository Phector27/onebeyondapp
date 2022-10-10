import React, { useEffect, useState } from "react"
import { View, FlatList, BackHandler, Pressable, Text, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import RNRestart from 'react-native-restart'
import { DataResponse } from "../../../api/types/app"
import { DefaultState } from "../../../store/index"
import { getPhonesDispatchAction } from "../../../store/app/dispatchers"
import { removeAllData, removeData } from "../../../utils/AsyncStorage"
import { IPhonesScreen } from "./Interfaces/index"
import Loader from "../../common/Loader/Loader"
import PhoneCard from "../../common/PhoneCard/PhoneCard"
import { styles } from "./styles"
import { WHITE } from '../../../utils/constants';

const PhonesScreen: React.FunctionComponent<IPhonesScreen> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const token = useSelector<DefaultState, string>((state) => state.app.token!)
  const phonesList = useSelector<DefaultState, DataResponse.PhoneResults[]>(state => state.app.phones)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPhonesDispatchAction(token))
  }, [])

  useEffect(() => {
    if (phonesList.length > 0) {
      setLoading(false)
    }
  }, [phonesList])

  const handleLogOut = () => {
    removeAllData()
    setTimeout(() => {
      RNRestart.Restart()
    }, 500);
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      handleLogOut()
      return true
    })
  }, [])

  return !loading ? (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogOut} style={styles.logOutButton}>
        <Text style={styles.logOutText}>Log Out</Text>
      </TouchableOpacity>
      <FlatList
        data={phonesList}
        renderItem={({ item }) => (
          <PhoneCard item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  ) : (
    <Loader />
  )
}

export default PhonesScreen
