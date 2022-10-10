import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import HomeNavigator from '../navigators/HomeNavigator'
import LoginNavigator from '../navigators/LoginNavigator'
import { setTokenDispatchAction, setIsAdminUserDispatchAction } from '../store/app/dispatchers';
import { getData } from '../utils/AsyncStorage'

const App = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isLogged, setIsLogged] = useState<boolean>(false)

  const dispatch = useDispatch()

  useEffect(() => {
    obtainToken()
  }, [])

  const obtainToken = async () => {
    const token = await getData('token')
    if (token) {
      dispatch(setTokenDispatchAction(token))
      setIsLogged(true)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
      {loading
        ? null
        : isLogged
          ? <HomeNavigator />
          : <LoginNavigator />
      }
    </NavigationContainer>
  )
}

export default App
