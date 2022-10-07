import React from 'react'
import { View, Text } from 'react-native'
import UButton from '../Buttons/Buttons'
import { styles } from './styles'

interface IAlert {
  message: string
  closeAlert: () => void
}

const CustomAlert: React.FunctionComponent<IAlert> = ({ message, closeAlert }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <UButton text='Ok' onPress={closeAlert}/>
    </View>
  )
}

export default CustomAlert
