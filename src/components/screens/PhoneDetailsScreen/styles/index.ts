import { StyleSheet } from "react-native"
import { isIpad, WHITE, GREY } from '../../../../utils/constants';

export default StyleSheet.create({
  container: {
    marginTop: 75,
  },
  image: {
    alignSelf: 'center',
    width: isIpad ? 500 : 300,
    height: isIpad ? 500 : 300,
  },
  title: {
    color: WHITE,
    marginTop: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: isIpad ? 40 : 25,
  },
  description: {
    width: '87.5%',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'justify',
    fontSize: isIpad ? 25 : 16,
    color: WHITE, marginTop: 25,
  },
  specsContainer: {
    alignSelf: 'center',
    width: isIpad ? '92.5%' : '100%',
  },
  specsTitle: {
    marginLeft: 25,
    fontWeight: 'bold',
    fontSize: isIpad ? 30 : 20,
    color: WHITE, marginTop: 25,
  },
  colorContainer: {
    marginTop: 5,
    marginLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  specTitle: {
    color: WHITE,
    fontWeight: 'bold',
    fontSize: isIpad ? 20 : 14,
  },
  processorAndPriceContainer: {
    marginLeft: 25,
    marginVertical: 2.5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  ramContainer: {
    marginLeft: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  specText: {
    color: WHITE,
    fontSize: isIpad ? 20 : 14,
  },
  editContainer: {
    marginTop: 25,
    backgroundColor: GREY,
  },
  editTitleContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  inputName: {
    color: WHITE,
    fontSize: 16,
  },
  editTitle: {
    fontSize: 20
  },
  editInput: {
    color: WHITE,
    fontSize: 16,
  },
  editDescription: {
    color: WHITE,
    fontSize: 16,
    textAlign: "justify",
  },
  editSpecsContainer: {
    width: "90%",
    alignSelf: "center",
  },
  editTextStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2.5,
  },
  editSpecTextTitle: {
    color: WHITE,
    fontWeight: "bold",
  },
  saveBtn: {
    marginVertical: 20,
  },
})
