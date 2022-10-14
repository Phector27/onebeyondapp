import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../components/screens/LoginScreen'
import PhonesScreen from '../components/screens/PhonesScreen'
import PhoneDetailsScreen from '../components/screens/PhoneDetailsScreen'
import { BLACK } from '../utils/constants'

const LoginNavigator = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: BLACK }
       }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="PhonesScreen" component={PhonesScreen} />
      <Stack.Screen name="PhoneDetailsScreen" component={PhoneDetailsScreen} />
    </Stack.Navigator>
  )
}

export default LoginNavigator
