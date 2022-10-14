import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { IAlert } from './interfaces'
import { OK } from '../../../utils/constants'
import UButton from '../Buttons'

const CustomAlert: React.FunctionComponent<IAlert> = ({ message, closeAlert }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <UButton text={OK} onPress={closeAlert}/>
    </View>
  )
}

export default CustomAlert
