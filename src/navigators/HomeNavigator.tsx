import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../components/screens/HomeScreen/HomeScreen'
import SubsScreen from '../components/screens/SubsScreen/SubsScreen'

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SubsScreen" component={SubsScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator
