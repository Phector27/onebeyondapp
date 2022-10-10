import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../components/screens/LoginScreen/LoginScreen'
import PhonesScreen from '../components/screens/PhonesScreen/PhonesScreen'
import RegisterScreen from '../components/screens/RegisterScreen/RegisterScreen'
import PhoneDetailsScreen from '../components/screens/PhoneDetailsScreen/PhoneDetailsScreen'
import { BLACK } from '../utils/constants';

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
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default LoginNavigator
