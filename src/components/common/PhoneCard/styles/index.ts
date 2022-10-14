import { StyleSheet } from "react-native"
import { WHITE, isIpad, BLACK } from '../../../../utils/constants'

export default StyleSheet.create({
  container: { 
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: WHITE,
  },
  image: {
    width: isIpad ? 200 : 100,
    height: isIpad ? 200 : 100
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
  },
  itemTitle: {
    color: BLACK,
    fontWeight: 'bold',
    fontSize: isIpad ? 40 : 20,
    textAlign: isIpad ? 'center' : 'auto',
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: isIpad ? 10 : 5,
  },
  priceContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 2.5,
  },
  proccessorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  specsTitle: {
    fontWeight: 'bold',
    fontSize: isIpad ? 25 : 14,
  },
  specsText: {
    fontSize: isIpad ? 25 : 14,
  },
  moreInfoText: {
    marginTop: 10,
    alignSelf: 'flex-end',
    fontSize: isIpad ? 25 : 14,
  }
})
