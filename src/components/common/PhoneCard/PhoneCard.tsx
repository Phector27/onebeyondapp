import React from 'react'
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native'
import { DataResponse } from '../../../api/types/app';
import { WHITE, BLACK, isIpad } from '../../../utils/constants';

interface IPhoneCard {
  item: DataResponse.PhoneResults
  navigation: {
    navigate: (route: string, params?: object) => void
  }
}

const PhoneCard: React.FunctionComponent<IPhoneCard> = ({ item, navigation }) => {

  return (
    <TouchableOpacity
    style={{ flex: 1, flexDirection: 'row', margin: 10, backgroundColor: WHITE, borderRadius: 10, padding: 10 }}
    onPress={() => navigation.navigate('PhoneDetailsScreen', { id: item._id })}>
    <Image
      style={{ width: isIpad ? 200 : 100, height: isIpad ? 200 : 100 }}
      source={{ uri: item.imageFileName }}
      resizeMode="contain"
    />
    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
      <Text style={{ fontSize: isIpad ? 40 : 20, fontWeight: 'bold', color: BLACK, textAlign: isIpad ? 'center' : 'auto' }}>{item.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: isIpad ? 10 : 5 }}>
          <Text style={{fontWeight: 'bold', fontSize: isIpad ? 25 : 14}}>Color: </Text>
          <Text style={{ fontSize: isIpad ? 25 : 14 }}>{item.color}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2.5 }}>
          <Text style={{fontWeight: 'bold', fontSize: isIpad ? 25 : 14}}>Price: </Text>
          <Text style={{ fontSize: isIpad ? 25 : 14 }}>{item.price}$</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{fontWeight: 'bold', fontSize: isIpad ? 25 : 14}}>Processor: </Text>
          <Text style={{ fontSize: isIpad ? 25 : 14 }}>{item.processor}</Text>
        </View>
      <Text style={{alignSelf: 'flex-end', marginTop: 10, fontSize: isIpad ? 25 : 14}}>Press for more info</Text>
    </View>
  </TouchableOpacity>
  )
}

export default PhoneCard