import { StyleSheet } from "react-native"
import { isIpad, RED } from '../../../../utils/constants'

export default StyleSheet.create({
  keyboardAvoid: {
    width: "100%"
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  goBackBtn: {
    marginTop: 60,
    left: isIpad ? 50 : 20,
    alignSelf: "flex-start",
    width: isIpad ? "20%" : "30%",
    transform: [{ scale: isIpad ? 1.25 : 0.75 }],
  },
  title: {
    marginTop: 10,
    color: "white",
    fontSize: isIpad ? 35 : 20,
  },
  idInput: {
    width: isIpad ? "50%" : "85%",
    transform: [{ scale: isIpad ? 1.25 : 0.9 }],
  },
  inputStyle: {
    marginTop: isIpad ? 15 : -5,
    width: isIpad ? "50%" : "85%",
    transform: [{ scale: isIpad ? 1.25 : 0.9 }],
  },
  inputMarginStyle: {
    marginTop: isIpad ? 15 : -5,
    width: isIpad ? "50%" : "85%",
    transform: [{ scale: isIpad ? 1.25 : 0.9 }],
  },
  addBtn: {
    marginTop: isIpad ? 20 : 5
  },
  alertText: {
    color: RED,
    marginTop: 10,
    paddingBottom: 25,
    textAlign: "center",
    fontSize: isIpad ? 25 : 14,
  }
})
