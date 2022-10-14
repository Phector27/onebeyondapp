import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { IPhoneCard } from './interfaces'
import { PHONE_DETAILS_SCREEN, COLOR, PRICE, PROCESSOR, MORE_INFO } from '../../../utils/constants'

const PhoneCard: React.FunctionComponent<IPhoneCard> = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(PHONE_DETAILS_SCREEN, { id: item._id })}>
    <Image
      style={styles.image}
      resizeMode="contain"
      source={{ uri: item.imageFileName }}
    />
    <View style={styles.textContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
        <View style={styles.colorContainer}>
          <Text style={styles.specsTitle}>{COLOR}: </Text>
          <Text style={styles.specsText}>{item.color}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.specsTitle}>{PRICE}:  </Text>
          <Text style={styles.specsText}>{item.price}$</Text>
        </View>
        <View style={styles.proccessorContainer}>
          <Text style={styles.specsTitle}>{PROCESSOR}:  </Text>
          <Text style={styles.specsText}>{item.processor}</Text>
        </View>
      <Text style={styles.moreInfoText}>{MORE_INFO}</Text>
    </View>
  </TouchableOpacity>
  )
}

export default PhoneCard
