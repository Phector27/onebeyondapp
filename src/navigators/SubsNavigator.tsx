import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SubsScreen from '../components/screens/SubsScreen/SubsScreen'
import HomeScreen from '../components/screens/LoginScreen/LoginScreen'

const SubsNavigator = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName="SubsScreen"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SubsScreen" component={SubsScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default SubsNavigator
