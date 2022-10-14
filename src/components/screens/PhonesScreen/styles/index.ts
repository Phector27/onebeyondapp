import { StyleSheet } from "react-native"
import { BLACK, WHITE, PRIMARY, FONT_SIZE_SM, FONT_SIZE_XXL, isIpad, GREY } from '../../../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    paddingBottom: 50,
    backgroundColor: BLACK,
  },
  logOutButton: {
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
    backgroundColor: PRIMARY,
  },
  logOutText: {
    color: BLACK,
    fontSize: FONT_SIZE_SM,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: WHITE,
    textAlign: 'center',
    fontSize: FONT_SIZE_XXL,
  },
  btnContainer: {
    marginBottom: 15,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    width: isIpad ? "130%" : "100%",
    justifyContent: isIpad ? "space-around" : "space-between",
  },
  addBtn: {
    alignSelf: "flex-start",
    width: isIpad ? "15%" : "35%",
    transform: [{ scale: isIpad ? 1.25 : 0.75 }]
  },
  logOutBtn: {
    alignSelf: "flex-end",
    width: isIpad ? "15%" : "25%",
    transform: [{ scale: isIpad ? 1.25 : 0.75 }],
  },
  addPlusBtn: {
    width: 40,
    height: 40,
    zIndex: 1000,
    borderRadius: 20,
    position: "absolute",
    alignItems: "center",
    right: isIpad ? 40 : 20,
    bottom: isIpad ? 40 : 20,
    justifyContent: "center",
    backgroundColor: PRIMARY,
    transform: [{ scale: isIpad ? 2.5 : 1.5 }],
  },
  pullToRefreshText: {
    color: GREY,
    textAlign: "center",
    fontSize: isIpad ? 25 : 14,
  },
  pulledText: {
    color: PRIMARY,
    textAlign: "center",
    opacity: 0.8,
    marginVertical: 10,
    fontSize: isIpad ? 20 : 14
  },
})