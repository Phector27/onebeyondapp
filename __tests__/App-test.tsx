import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import PhoneCard from '../src/components/common/PhoneCard'
import { INavigation } from '../src/components/common/Form/Interfaces/index';

it('renders correctly', () => {
  renderer.create(
    <PhoneCard
      navigation={{ navigate: (route: string, params?: object): void => {} } as INavigation}
      item={{
        _id: '5f9f1b9b0b1b9c0017b8b1a1',
        id: 1,
        name: 'iPhone 11',
        manufacturer: 'Apple',
        description: 'A large phone with one of the best screens',
        color: 'black',
        price: 699,
        imageFileName: 'https://fakeimages.com/IPhone_11.png',
        screen: '6.1 inches IPS',
        processor: 'A13 Bionic',
        ram: 4,
      }}
    />
  )
})
