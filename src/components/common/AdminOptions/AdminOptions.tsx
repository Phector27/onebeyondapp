import { View, Text, TouchableOpacity, Alert, Platform } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultState } from '../../../store'
import { DataResponse } from '../../../api/types/app'
import { WHITE, RED, PRIMARY, BLACK } from '../../../utils/constants';
import { deletePhoneDispatchAction } from '../../../store/app/dispatchers';

interface IAdminOptions {
  navigation: {
    navigate: (route: string, params?: object) => void
    goBack: () => void
  }
  handleEdit: (value: boolean) => void
  isEditing: boolean
}

const AdminOptions: React.FunctionComponent<IAdminOptions> = ({ navigation, handleEdit, isEditing }) => {

  const dispatch = useDispatch()

  const phoneDetails = useSelector<DefaultState, DataResponse.PhoneResults>(state => state.app.phoneDetails!)
  const token = useSelector<DefaultState, string>(state => state.app.token!)

  const deletePhone = () => {
    dispatch(deletePhoneDispatchAction(phoneDetails._id, token))
    navigation.goBack()
  }

  const openPrompt = () => {
    if (Platform.OS === 'ios') {
      return (
        Alert.prompt(
          'Remove phone',
          'Are you sure you want to remove this phone?',
          [
            {
              text: 'Cancel',
              style: 'cancel'
            },
            {
              text: 'OK',
              onPress: () => deletePhone()
            }
          ],
          'default'
        )
      )
    } else {
      return (
        Alert.alert(
          'Remove phone',
          'Are you sure you want to remove this phone?',
          [
            {
              text: 'Cancel',
              style: 'cancel'
            },
            {
              text: 'OK',
              onPress: () => deletePhone()
            }
          ],
          { cancelable: false }
        )
      )
    }
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginBottom: 20 }}>
      <TouchableOpacity
        onPress={() => handleEdit(!isEditing)}
        style={{ backgroundColor: isEditing ? PRIMARY : WHITE, padding: 10, margin: 10, borderRadius: 10, width: '40%' }}
      >
        <Text style={{ textAlign: 'center', color: BLACK, fontWeight: 'bold' }}>{isEditing ? 'Editing now' : 'Edit phone'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openPrompt}
          style={{ backgroundColor: RED, padding: 10, margin: 10, borderRadius: 10, width: '40%' }}
        >
          <Text style={{ textAlign: 'center', color: BLACK, fontWeight: 'bold' }}>Delete Phone</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AdminOptions