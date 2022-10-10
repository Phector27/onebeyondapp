import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { DataResponse } from '../../../api/types/app';
import { WHITE } from '../../../utils/constants';

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
      style={{ width: 100, height: 100 }}
      source={{ uri: item.imageFileName }}
      resizeMode="contain"
    />
    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Text style={{fontWeight: 'bold'}}>Color: </Text>
          <Text>{item.color}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2.5 }}>
          <Text style={{fontWeight: 'bold'}}>Price: </Text>
          <Text>{item.price}$</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{fontWeight: 'bold'}}>Processor: </Text>
          <Text>{item.processor}</Text>
        </View>
      <Text style={{alignSelf: 'flex-end', marginTop: 20}}>Press for more info</Text>
    </View>
  </TouchableOpacity>
  )
}

export default PhoneCard