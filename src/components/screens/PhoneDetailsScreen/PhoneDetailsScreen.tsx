import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { IPhoneDetailsScreen } from './interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { getPhoneDetailsDispatchAction, clearPhoneDetailsDispatchAction } from '../../../store/app/dispatchers';
import { DefaultState } from '../../../store'
import { DataResponse } from '../../../api/types/app'
import Loader from '../../common/Loader/Loader'
import { WHITE, RED } from '../../../utils/constants';
import { getData } from '../../../utils/AsyncStorage';
import AdminOptions from '../../common/AdminOptions/AdminOptions';

const PhoneDetailsScreen: React.FunctionComponent<IPhoneDetailsScreen> = ({ navigation, route }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)

  const token = useSelector<DefaultState, string>(state => state.app.token!)
  const phoneDetails = useSelector<DefaultState, DataResponse.PhoneResults>(state => state.app.phoneDetails!)
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
    if (phoneDetails) {
      setLoading(false)
    }
  }, [phoneDetails])

  useEffect(() => {
    obtainIfIsAdminUser()
  }, [])

  const obtainIfIsAdminUser = async () => {
    const isAdminUser = await getData('isAdmin')
    if (isAdminUser === 'true') {
      setIsAdmin(true)
    }
  }

  return ( !loading ?
    <ScrollView style={{ marginTop: 75 }}>
      {isAdmin && <AdminOptions navigation={navigation}/> }
      <Image
        style={{
        width: 300,
        height: 300,
        alignSelf: 'center'
      }}
        source={{ uri: phoneDetails.imageFileName }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color: WHITE, marginTop: 25 }}>{phoneDetails.name}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', width: '90%', alignSelf: 'center', color: WHITE, marginTop: 25, textAlign: 'justify' }}>{phoneDetails.description}</Text>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: WHITE, marginTop: 25, marginLeft: 25 }}>Specs</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 25 }}>
          <Text style={{ fontWeight: 'bold', color: WHITE }}>Color: </Text>
          <Text style={{ color: WHITE }}>{phoneDetails.color}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2.5, marginLeft: 25 }}>
          <Text style={{ fontWeight: 'bold', color: WHITE }}>Processor: </Text>
          <Text style={{ color: WHITE }}>{phoneDetails.processor}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25 }}>
          <Text style={{ fontWeight: 'bold', color: WHITE }}>RAM: </Text>
          <Text style={{ color: WHITE }}>{phoneDetails.ram}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2.5, marginLeft: 25 }}>
          <Text style={{ fontWeight: 'bold', color: WHITE }}>Price: </Text>
          <Text style={{ color: WHITE }}>{phoneDetails.price}$</Text>
        </View>
      </View>
    </ScrollView> : <Loader />
  )
}

export default PhoneDetailsScreen