import React from 'react'
import { View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { favImage, homeImage } from '../utils/HostedImages'
import HomeNavigator from './HomeNavigator'
import SubsNavigator from './SubsNavigator'

interface ITabItems {
  Home: string | (() => void)
  Favs: string | (() => void)
}

const TabNames: string[] = ['Home', 'Subs']

const TabScreens: ITabItems | any = {
  Home: HomeNavigator,
  Subs: SubsNavigator
}

const TabTitles: ITabItems | any = {
  Home: 'Home',
  Subs: 'Subs'
}

const TabStyle: any = {
  tabBarActiveTintColor: '#FFFFFF',
  tabBarInactiveTintColor: '#c9c9c9',
  tabBarActiveBackgroundColor: '#242645',
  tabBarInactiveBackgroundColor: '#242645',
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: '#242645',
    borderTopWidth: 0,
  },
  tabBarLabelStyle: {
    fontSize: 14
  },
  headerShown: false
}

const _createTabs = () => {
  const Tab = createBottomTabNavigator()

  return TabNames.map((name: string, i: number) => (
    <Tab.Screen
      key={i}
      name={name}
      component={TabScreens[name]}
      options={{
        unmountOnBlur: true,
        title: TabTitles[name],
        tabBarIcon: () => {
          return (
            <View>
              <Image
                style={{ height: 30, width: 30, tintColor: '#c9c9c9' }}
                source={{
                  uri:
                    name === 'Home'
                    ? homeImage
                    : favImage
                }}
                resizeMode="contain"
              />
            </View>
          )
        }
      }}
    />
  ))
}

const MainNavigator = () => {

  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={TabStyle}
    >
      {_createTabs()}
    </Tab.Navigator>
  )
}

export default MainNavigator
