import { StyleSheet } from "react-native"
import { isIpad, BLACK } from '../../../../utils/constants'

export default StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  adminBtn: {
    margin: 10,
    width: '40%',
    borderRadius: 10,
    padding: isIpad ? 30 : 10,
  },
  text: {
    color: BLACK,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: isIpad ? 30 : 14,
  }
})
