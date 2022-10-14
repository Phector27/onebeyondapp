import { StyleSheet } from 'react-native'
import { FONT_SIZE_M, BLACK, WHITE } from '../../../../utils/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    backgroundColor: BLACK,
    justifyContent: 'center',
  },
  text: {
    width: '80%',
    color: WHITE,
    marginBottom: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: FONT_SIZE_M,
  },
});
