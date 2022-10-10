import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IPhoneDetailsScreen } from './interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { getPhoneDetailsDispatchAction, clearPhoneDetailsDispatchAction } from '../../../store/app/dispatchers';
import { DefaultState } from '../../../store'
import { DataResponse } from '../../../api/types/app'
import Loader from '../../common/Loader/Loader'
import { WHITE } from '../../../utils/constants';

const PhoneDetailsScreen: React.FunctionComponent<IPhoneDetailsScreen> = ({ navigation, route }) => {
  const [loading, setLoading] = useState<boolean>(true)

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

  console.log('detalles', phoneDetails)

  return ( !loading ?
    <View style={{ marginTop: 50 }}>
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
      <Text style={{ fontSize: 16, fontWeight: 'bold', width:'90%', alignSelf: 'center', color: WHITE, marginTop: 25, textAlign: 'justify' }}>{phoneDetails.description}</Text>
    </View> : <Loader />
  )
}

export default PhoneDetailsScreen