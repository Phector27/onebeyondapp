import { View, Text, AsyncStorage, ActivityIndicator, ScrollView, FlatList, Image, TouchableOpacity, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getData, removeData } from '../../../utils/AsyncStorage';
import { useDispatch, useSelector } from 'react-redux'
import { DefaultState } from '../../../store/index';
import { getPhonesDispatchAction } from '../../../store/app/dispatchers';
import { DataResponse } from '../../../api/types/app';
import { BLACK, WHITE } from '../../../utils/constants';
import Loader from '../../common/Loader/Loader';
import { IPhonesScreen } from './Interfaces/index';

const PhonesScreen: React.FunctionComponent<IPhonesScreen> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const token = useSelector<DefaultState, string>(state => state.app.token!)
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

  // useEffect(() => {
  //   removeData('token')
  // }, [])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      removeData('token')
      navigation.navigate('LoginScreen')
      return true
    })
  }, [])

  return ( !loading ?
    <View style={{ flex: 1, backgroundColor: BLACK, paddingTop: '20%' }}>
      <FlatList
        data={phonesList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1, flexDirection: 'row', margin: 10, backgroundColor: WHITE, borderRadius: 10, padding: 10 }}
            onPress={() => navigation.navigate('PhoneDetails', { id: item._id })}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: item.imageFileName }}
              resizeMode="contain"
            />
            <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.price} $</Text>
              <Text style={{alignSelf: 'flex-end', marginTop: 20}}>Press for more info</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item._id}
      />
    </View> : <Loader />
  )
}

export default PhonesScreen