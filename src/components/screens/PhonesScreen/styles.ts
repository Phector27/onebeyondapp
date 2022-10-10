import { StyleSheet } from "react-native"
import { BLACK, WHITE, FONT_SIZE_L, PRIMARY, FONT_SIZE_S, FONT_SIZE_SM } from '../../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    paddingTop: '20%',
    paddingBottom: 50
  },
  logOutButton: {
    alignSelf: 'flex-end',
    marginRight: 10,
    backgroundColor: PRIMARY,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  logOutText: {
    color: BLACK,
    fontSize: FONT_SIZE_SM,
  },
})