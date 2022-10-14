import { Platform } from "react-native"

export const PRIMARY = '#D1FF00'
export const GREY = 'rgba(255,255,255,0.75)'
export const WHITE = '#FFFFFF'
export const BLACK = '#000000'
export const RED = '#FF0000'
export const FONT_SIZE_S = 12
export const FONT_SIZE_SM = 14
export const FONT_SIZE_M = 16
export const FONT_SIZE_L = 18
export const FONT_SIZE_XL = 20
export const FONT_SIZE_XXL = 22
export const URL = 'https://www.one-beyond.com/'
export const URL_LOGIN = 'https://onebeyond-hector.herokuapp.com/auth/login'
export const URL_REGISTER = 'https://onebeyond-hector.herokuapp.com/auth/register'
export const URL_GET_PHONES = 'https://onebeyond-hector.herokuapp.com/api/getAll'
export const URL_GET_PHONE_DETAILS = 'https://onebeyond-hector.herokuapp.com/api/getOne'
export const URL_REMOVE_PHONE = 'https://onebeyond-hector.herokuapp.com/api/delete'
export const URL_EDIT_PHONE = 'https://onebeyond-hector.herokuapp.com/api/update'
export const URL_ADD_PHONE = 'https://onebeyond-hector.herokuapp.com/api/createOne'
export const URL_LOGO = 'https://res.cloudinary.com/phector27/image/upload/v1665669550/logo_cbsvlo.png'
export const WELCOME_ACCESS = 'User register successfully. You can login now.'
export const EMPTY_SCREEN = 'There are no phones to show'
export const PULL_DOWN = 'Pull down to refresh data ↻'
export const PULLED = 'You are up to date 🤓'
export const LOG_OUT = 'Log Out'
export const ADD_NEW_PHONE = 'Add new 📱'
export const isIpad: boolean = Platform.OS === 'ios' && Platform.isPad


