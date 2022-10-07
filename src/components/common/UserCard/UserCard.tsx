import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { IUserCard } from './Interfaces'
import { styles } from './styles'

const UserCard: React.FunctionComponent<IUserCard> = ({ user, index }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Submission: {index}</Text>
      <Text style={styles.textStyle}>
        Name: {user.Name ?? 'N/A'}
        {'\n'}
        Surname: {user.Surname ?? 'N/A'}
        {'\n'}
        Age: {user.Age ?? 'N/A'}
      </Text>
    </View>
  )
}

export default UserCard