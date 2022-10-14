import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, BackHandler } from 'react-native'
import { IPhoneDetailsScreen } from './interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { getPhoneDetailsDispatchAction, clearPhoneDetailsDispatchAction, editPhoneDispatchAction } from '../../../store/app/dispatchers';
import { DefaultState } from '../../../store'
import { DataResponse } from '../../../api/types/app'
import Loader from '../../common/Loader/Loader'
import { WHITE, RED, GREY, isIpad } from '../../../utils/constants';
import { getData } from '../../../utils/AsyncStorage';
import AdminOptions from '../../common/AdminOptions/AdminOptions';
import UButton from '../../common/Buttons/Buttons';
import CustomAlert from '../../common/Alert/Alert';

const PhoneDetailsScreen: React.FunctionComponent<IPhoneDetailsScreen> = ({ navigation, route }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const token = useSelector<DefaultState, string>(state => state.app.token!)
  const phoneDetails = useSelector<DefaultState, DataResponse.PhoneResults>(state => state.app.phoneDetails!)
  const phonesList = useSelector<DefaultState, DataResponse.PhoneResults[]>(state => state.app.phones)

  const [phoneName, setPhoneName] = useState<string>('')
  const [phoneDescription, setPhoneDescription] = useState<string>('')
  const [phonePrice, setPhonePrice] = useState<number>(0)
  const [phoneColor, setPhoneColor] = useState<string>('')
  const [phoneScreen, setPhoneScreen] = useState<string>('')
  const [phoneProcessor, setPhoneProcessor] = useState<string>('')
  const [phoneRam, setPhoneRam] = useState<number>(0)
  const [phoneManufacturer, setPhoneManufacturer] = useState<string>('')
  const [phoneId, setPhoneId] = useState<string>('')

  const dispatch = useDispatch()

  useEffect(() => {
    if (!route.params) {
      navigation.goBack()
    } else {
      dispatch(getPhoneDetailsDispatchAction(route?.params?.id, token))
    }

    return () => {
      dispatch(clearPhoneDetailsDispatchAction())
    }
  }, [])

  useEffect(() => {
    if (phoneDetails?.name) {
      setPhoneName(phoneDetails.name)
      setPhoneDescription(phoneDetails.description)
      setPhonePrice(phoneDetails.price)
      setPhoneColor(phoneDetails.color)
      setPhoneScreen(phoneDetails.screen)
      setPhoneProcessor(phoneDetails.processor)
      setPhoneRam(phoneDetails.ram)
      setPhoneManufacturer(phoneDetails.manufacturer)
      setPhoneId(phoneDetails._id)
      setLoading(false)
    }
  }, [phoneDetails])


  useEffect(() => {
    obtainIfIsAdminUser()
  }, [])

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      navigation.navigate('PhonesScreen')
      return true
    })  
  }, [])

  const obtainIfIsAdminUser = async () => {
    const isAdminUser = await getData('isAdmin')
    if (isAdminUser === 'true') {
      setIsAdmin(true)
    }
  }

  const handleEdit = (value: boolean) => {
    setIsEditing(value)
  }

  const handleEditDispatch = () => {
      const phone = {
        id: phoneDetails.id,
        name: phoneName,
        manufacturer: phoneManufacturer,
        description: phoneDescription,
        color: phoneColor,
        price: phonePrice,
        screen: phoneScreen,
        processor: phoneProcessor,
        ram: phoneRam,
      }
    
      dispatch(editPhoneDispatchAction(token, phone, phoneDetails._id))
      setIsEditing(false)
    }

  return ( phoneDetails?.message && phoneDetails?.message?.length > 0 ? <CustomAlert
    message={phoneDetails?.message ?? 'Error'}
    closeAlert={() => {
      navigation.navigate('PhonesScreen')
    }}
    
  /> : !loading && phoneName ?
    <ScrollView style={{ marginTop: 75 }}>
      
      {isAdmin && <AdminOptions navigation={navigation} handleEdit={handleEdit} isEditing={isEditing} /> }
      <Image
        style={{
        width: isIpad ? 500 : 300,
        height: isIpad ? 500 : 300,
        alignSelf: 'center'
      }}
        source={{ uri: phoneDetails.imageFileName }}
        resizeMode="contain"
      />
      {!isEditing ? (
        <>
          <Text style={{ fontSize: isIpad ? 40 : 25, fontWeight: 'bold', alignSelf: 'center', color: WHITE, marginTop: 25 }}>{phoneDetails.name}</Text>
          <Text style={{ fontSize: isIpad ? 25 : 16, fontWeight: 'bold', width: '87.5%', alignSelf: 'center', color: WHITE, marginTop: 25, textAlign: 'justify' }}>{phoneDetails.description}</Text>
          <View style={{width: isIpad ? '92.5%' : '100%', alignSelf: 'center'}}>
            <Text style={{ fontSize:  isIpad ? 30 : 20, fontWeight: 'bold', color: WHITE, marginTop: 25, marginLeft: 25 }}>Specs</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 25 }}>
              <Text style={{ fontWeight: 'bold', color: WHITE, fontSize: isIpad ? 20 : 14 }}>Color: </Text>
              <Text style={{ color: WHITE, fontSize: isIpad ? 20 : 14  }}>{phoneDetails.color}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2.5, marginLeft: 25 }}>
              <Text style={{ fontWeight: 'bold', color: WHITE, fontSize: isIpad ? 20 : 14  }}>Processor: </Text>
              <Text style={{ color: WHITE, fontSize: isIpad ? 20 : 14  }}>{phoneDetails.processor}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25 }}>
              <Text style={{ fontWeight: 'bold', color: WHITE, fontSize: isIpad ? 20 : 14  }}>RAM: </Text>
              <Text style={{ color: WHITE, fontSize: isIpad ? 20 : 14  }}>{phoneDetails.ram}GB</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2.5, marginLeft: 25 }}>
              <Text style={{ fontWeight: 'bold', color: WHITE, fontSize: isIpad ? 20 : 14  }}>Price: </Text>
              <Text style={{ color: WHITE, fontSize: isIpad ? 20 : 14  }}>{phoneDetails.price}$</Text>
            </View>
          </View>
        </>
      ) : (
          <View style={{marginTop: 25, backgroundColor: GREY}}>
            <View style={{width: '90%', alignSelf: 'center', paddingVertical: 10}}>
              <Text style={{ fontSize: 20 }}>Title: </Text>
              <TextInput
              style={{ fontSize: 16, color: WHITE}}
              value={phoneName}
              onChangeText={text => setPhoneName(text)}
            />
            </View>
            <View style={{width: '90%', alignSelf: 'center', paddingVertical: 10}}>
              <Text style={{ fontSize: 20 }}>Manufacturer: </Text>
              <TextInput
              style={{ fontSize: 16, color: WHITE}}
              value={phoneManufacturer}
              onChangeText={text => setPhoneManufacturer(text)}
            />
            </View>
            <View style={{width: '90%', alignSelf: 'center', paddingVertical: 10}}>
              <Text style={{ fontSize: 20 }}>Description: </Text>
              <TextInput
              multiline
              style={{ fontSize: 16, color: WHITE, textAlign: 'justify'}}
              value={phoneDescription}
              onChangeText={text => setPhoneDescription(text)}
            />
            </View>
            <View style={{width: '90%', alignSelf: 'center', paddingVertical: 10}}>
              <Text style={{ fontSize: 20 }}>Price: </Text>
              <TextInput
                  style={{ fontSize: 16, color: WHITE }}
                  value={phonePrice?.toString()}
                  keyboardType="numeric"
                  onChangeText={text => {
                    if (text.length > 0) {
                      const number = parseInt(text)
                      if (number) {
                        setPhonePrice(number)
                      }
                    } else {
                      setPhonePrice(0)
                    }
                  }}
            />
            </View>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <Text style={{ fontSize: 20 }}>Specs: </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginVertical: 2.5 }}>
                <Text style={{ fontWeight: 'bold', color: WHITE }}>Color: </Text>
                <TextInput
                  style={{ color: WHITE }}
                  value={phoneColor}
                  onChangeText={text => setPhoneColor(text)}
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2.5 }}>
                <Text style={{ fontWeight: 'bold', color: WHITE }}>Processor: </Text>
                <TextInput
                  style={{ color: WHITE }}
                  value={phoneProcessor}
                  onChangeText={text => setPhoneProcessor(text)}
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2.5 }}>
                <Text style={{ fontWeight: 'bold', color: WHITE }}>Screen </Text>
                <TextInput
                  style={{ color: WHITE }}
                  value={phoneScreen}
                  onChangeText={text => setPhoneScreen(text)}
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2.5 }}>
                <Text style={{ fontWeight: 'bold', color: WHITE }}>RAM: </Text>
                <TextInput
                    style={{ color: WHITE }}
                    keyboardType="numeric"
                    value={phoneRam.toString()}
                    onChangeText={text => {
                      if (text.length > 0) {
                        const number = parseInt(text)
                        if (number) {
                          setPhoneRam(number)
                        }
                      } else {
                        setPhoneRam(0)
                      }
                    }}
                />
              </View>
            </View>
            <UButton text='Save' style={{ marginVertical: 20 }} onPress={handleEditDispatch} />
          </View>
      )}
    </ScrollView> : <Loader />
  )
}

export default PhoneDetailsScreen