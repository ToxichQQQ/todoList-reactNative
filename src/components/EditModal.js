import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Button,
  TextInput,
  Alert,
} from "react-native";
import { THEME } from "../theme";

export function EditModal({ isOpen, todo, handleHideModal, onSave }) {
  const [title, setTitle] = useState(todo.title);

  const handleSaveTitle = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Error",
        `Minimal length is 3 symbols. Now ${title.trim().length}`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal visible={isOpen} animationType="slide" transparent={false}>
      <View style={styles.modal}>
        <TextInput
          value={title}
          style={styles.textInput}
          onChangeText={setTitle}
        />
        <View style={styles.buttonsContainer}>
          <Button title="Save" onPress={handleSaveTitle} />
          <Button
            color={THEME.DANGER_COLOR}
            title="Cancel"
            onPress={() => handleHideModal()}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInput: {
    width: "80%",
    fontSize: 16,
    color: THEME.WHITE_TEXT,
    borderWidth: 1,
    borderBottomColor: THEME.LIGHT_GREY,
    marginBottom: 20,
  },
});
