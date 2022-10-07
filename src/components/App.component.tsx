import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from '../navigators/MainNavigator'

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App
