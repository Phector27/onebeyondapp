import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen/HomeScreen'

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
      <HomeScreen />
    </NavigationContainer>
  )
}

export default App
