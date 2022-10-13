import { StyleSheet } from "react-native"
import { BLACK, WHITE, FONT_SIZE_L, PRIMARY, FONT_SIZE_S, FONT_SIZE_SM, FONT_SIZE_XXL } from '../../../utils/constants';

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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: WHITE,
    fontSize: FONT_SIZE_XXL,
    textAlign: 'center'
  },
})