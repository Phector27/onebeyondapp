import React, { useEffect, useState } from "react";
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  BackHandler,
  Alert,
} from "react-native";
import TextInput from "../TextInput/TextInput";
import UButton from "../Buttons/Buttons";
import { useDispatch } from "react-redux";
import { addPhoneDispatchAction } from "../../../store/app/dispatchers";
import { RED } from "../../../utils/constants";
import { UButtonType } from "../Buttons/Buttons";

interface IAddNewPhoneForm {
  token: string;
  handleAddNewPhone: (value: boolean) => void;
}

const AddNewPhoneForm: React.FunctionComponent<IAddNewPhoneForm> = ({
  token,
  handleAddNewPhone,
}) => {
  const [phone, setPhone] = useState({
    id: Math.random().toFixed(5),
    name: "",
    manufacturer: "",
    description: "",
    color: "",
    price: 0,
    screen: "",
    processor: "",
    ram: 0,
  });

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      handleAddNewPhone(false);
      return true;
    });
  }, []);

  const dispatch = useDispatch();

  const handleAddPhone = () => {
    dispatch(addPhoneDispatchAction(token, phone));
    handleAddNewPhone(false);
  };

  const showButton = () => {
    if (
      phone.name &&
      phone.manufacturer &&
      phone.description &&
      phone.color &&
      phone.price &&
      phone.screen &&
      phone.processor &&
      phone.ram
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleClose = () => {
    handleAddNewPhone(false);
  };

  const validateDataType = (value: string, type: string) => {
    if (type === "number") {
      return !isNaN(Number(value));
    } else {
      return true;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ width: "100%" }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UButton
          onPress={handleClose}
          style={{
            alignSelf: "flex-start",
            width: "30%",
            transform: [{ scale: 0.75 }],
            marginTop: 60,
            left: 20,
          }}
          text="Go back"
        />
        <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
          Add new phone:
        </Text>

        <TextInput
          value={phone.id}
          length={phone?.id.length}
          editable={false}
          placeholder="Internal ID -> different from MongoDB _id"
          label="Internal control ID"
          style={{
            transform: [{ scale: 0.9 }],
          }}
        />
        <TextInput
          placeholder="Name"
          label="Name"
          value={phone.name}
          length={phone?.name.length}
          onChangeText={(text) => {
            validateDataType(text, "string") ? setPhone({ ...phone, name: text }) : setPhone({ ...phone, name: "N/A" })
          }}
          style={{
            transform: [{ scale: 0.9 }],
            marginTop: -5,
          }}
        />
        <TextInput
          placeholder="Manufacturer"
          label="Manufacturer"
          value={phone.manufacturer}
          length={phone?.manufacturer.length}
          onChangeText={(text) => {
            validateDataType(text, "string") ? setPhone({ ...phone, manufacturer: text }) : setPhone({ ...phone, manufacturer: "N/A" })
          }}
          style={{
            transform: [{ scale: 0.9 }],
            marginTop: -5,
          }}
        />
        <TextInput
          placeholder="Description"
          label="Description"
          multiline
          value={phone.description}
          length={phone?.description.length}
          onChangeText={(text) => {
            validateDataType(text, "string") ? setPhone({ ...phone, description: text }) : setPhone({ ...phone, description: "N/A" })
          }}
          style={{
            transform: [{ scale: 0.9 }],
            marginTop: -5,
          }}
        />
        <TextInput
          placeholder="Color"
          label="Color"
          value={phone.color}
          length={phone?.color.length}
          onChangeText={(text) => {
            validateDataType(text, "string") ? setPhone({ ...phone, color: text }) : setPhone({ ...phone, color: "N/A" })
          }}
          style={{
            transform: [{ scale: 0.9 }],
            marginTop: -5,
          }}
        />
        <TextInput
          placeholder="Price"
          label="Price"
          value={phone.price.toString()}
          keyboardType="numeric"
          length={phone?.price.toString().length}
          onChangeText={(text: any) => {
            validateDataType(text, "number") ? setPhone({ ...phone, price: Number(text) }) : setPhone({ ...phone, price: 0 })
          }}
          style={{
            transform: [{ scale: 0.9 }],
            marginTop: -5,
          }}
        />
        <TextInput
          placeholder="Screen size"
          label="Screen size"
          value={phone.screen}
          length={phone?.screen.length}
          onChangeText={(text) => {
            validateDataType(text, "string") ? setPhone({ ...phone, screen: text }) : setPhone({ ...phone, screen: "N/A" })
          }}
          style={{
            transform: [{ scale: 0.9 }],
            marginTop: -5,
          }}
        />
        <TextInput
          placeholder="Processor"
          label="Processor"
          value={phone.processor}
          length={phone?.processor.length}
          onChangeText={(text) => {
            validateDataType(text, "string") ? setPhone({ ...phone, processor: text }) : setPhone({ ...phone, processor: "N/A" })
          }}
          style={{
            transform: [{ scale: 0.9 }],
            marginTop: -5,
          }}
        />
        <TextInput
          placeholder="Ram"
          label="Ram"
          value={phone.ram.toString()}
          length={phone?.ram.toString().length}
          keyboardType="numeric"
          onChangeText={(text: any) => {
            validateDataType(text, "number") ? setPhone({ ...phone, ram: Number(text) }) : setPhone({ ...phone, ram: 0 })
          }}
          style={{
            transform: [{ scale: 0.9 }],
            marginTop: -5,
          }}
        />

        {showButton() ? (
          <UButton text="Add new phone" onPress={handleAddPhone} />
        ) : (
            <Text style={{
              color: RED,
              fontSize: 14,
              marginTop: 10,
              paddingBottom: 25,
              textAlign: "center",
            }}>
              Please fill all the fields
            </Text>
          )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddNewPhoneForm;
