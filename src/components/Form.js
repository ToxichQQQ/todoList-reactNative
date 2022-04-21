import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  Text,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../theme";

export function Form({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handlePress = () => {
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Please enter todo title");
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        placeholder="Enter your todo"
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      <AntDesign.Button
        style={styles.button}
        onPress={handlePress}
        name="pluscircleo"
      >
        Add
      </AntDesign.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderBottomColor: THEME.LIGHT_GREY,
    color: THEME.WHITE_TEXT,
  },
  button: {
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderColor: THEME.GOLD_COLOR,
    margin: 0,
  },
  buttonText: {
    color: THEME.WHITE_TEXT,
    fontSize: 14,
  },
});
