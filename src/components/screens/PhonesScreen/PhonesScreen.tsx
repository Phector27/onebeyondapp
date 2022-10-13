import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  BackHandler,
  Text,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import RNRestart from "react-native-restart";
import { DataResponse } from "../../../api/types/app";
import { DefaultState } from "../../../store/index";
import { getPhonesDispatchAction } from "../../../store/app/dispatchers";
import { removeAllData, getData } from "../../../utils/AsyncStorage";
import { IPhonesScreen } from "./Interfaces/index";
import Loader from "../../common/Loader/Loader";
import PhoneCard from "../../common/PhoneCard/PhoneCard";
import { styles } from "./styles";
import {
  EMPTY_SCREEN,
  WHITE,
  PULL_DOWN,
  GREY,
  PRIMARY,
  PULLED,
  LOG_OUT,
  ADD_NEW_PHONE,
} from "../../../utils/constants";
import UButton, { UButtonType } from "../../common/Buttons/Buttons";
import { transform } from "@babel/core";
import AddNewPhoneForm from "../../common/AddNewPhoneForm/AddNewPhoneForm";

const PhonesScreen: React.FunctionComponent<IPhonesScreen> = ({
  navigation,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [addNewPhone, setAddNewPhone] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const token = useSelector<DefaultState, string>((state) => state.app.token!);
  const phonesList = useSelector<DefaultState, DataResponse.PhoneResults[]>(
    (state) => state.app.phones
  );

  useEffect(() => {
    obtainIfIsAdminUser();
  }, []);

  const obtainIfIsAdminUser = async () => {
    const isAdminUser = await getData("isAdmin");
    if (isAdminUser === "true") {
      setIsAdmin(true);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhonesDispatchAction(token));
  }, []);

  useEffect(() => {
    if (phonesList.length) {
      setLoading(false);
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // force to show loader to get a better UX when the list is empty
    }
  }, [phonesList]);

  const handleLogOut = () => {
    removeAllData();
    setTimeout(() => {
      RNRestart.Restart();
    }, 500);
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      handleLogOut();
      return true;
    });

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", () => true);
    };
  }, []);

  const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const handleRefreshControl = React.useCallback(() => {
    dispatch(getPhonesDispatchAction(token));
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);

  const handleAddNewPhone = (value: boolean) => {
    setAddNewPhone(value);
  };

  return !loading ? (
    addNewPhone ? (
      <AddNewPhoneForm token={token} handleAddNewPhone={handleAddNewPhone} />
    ) : (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <UButton
            text={ADD_NEW_PHONE}
            type={UButtonType.SECONDARY}
            onPress={() => handleAddNewPhone(true)}
            style={{
              alignSelf: "flex-start",
              width: "35%",
              transform: [{ scale: 0.75 }],
              display: isAdmin ? "flex" : "none",
            }}
          />
          <UButton
            text={LOG_OUT}
            onPress={handleLogOut}
            style={{
              alignSelf: "flex-end",
              width: "25%",
              transform: [{ scale: 0.75 }],
            }}
          />
        </View>
          <UButton
            type={UButtonType.CLEAR}
            text="+"
            onPress={() => handleAddNewPhone(true)}
            style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: GREY,
            justifyContent: "center",
            alignItems: "center",
            display: isAdmin ? "flex" : "none",
            zIndex: 1000,
            transform: [{ scale: 1.5 }],
          }}
        />
        <Text style={{ color: GREY, textAlign: "center" }}>{PULL_DOWN}</Text>
        {refreshing && (
          <Text
            style={{
              color: PRIMARY,
              textAlign: "center",
              opacity: 0.8,
              marginVertical: 10,
            }}
          >
            {PULLED}
          </Text>
        )}
        {!isEmpty ? (
          <FlatList
            data={phonesList}
            renderItem={({ item }) => (
              <PhoneCard item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item._id}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={handleRefreshControl}
                tintColor={PRIMARY}
              />
            }
          />
        ) : (
          <ScrollView
            contentContainerStyle={styles.emptyContainer}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={handleRefreshControl}
                tintColor={PRIMARY}
              />
            }
          >
            <Text style={styles.emptyText}>{EMPTY_SCREEN}</Text>
          </ScrollView>
        )}
      </View>
    )
  ) : (
    <Loader />
  );
};

export default PhonesScreen;
