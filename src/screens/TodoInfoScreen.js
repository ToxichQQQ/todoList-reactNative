import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { THEME } from "../theme";
import { EditModal } from "../components/EditModal";

export function TodoInfoScreen({
  todoInfo,
  handleSelectTodo,
  handleRemoveTodo,
  handleUpdateTodo,
}) {
  const [isOpen, setOpen] = useState(false);

  const handleSave = (title) => {
    handleUpdateTodo(todoInfo.id, title);
    setOpen(false);
  };

  const handleDeleteTodo = () => {
    handleSelectTodo(null);
    handleRemoveTodo(todoInfo.id);
  };

  return (
    <View style={styles.container}>
      <EditModal
        isOpen={isOpen}
        handleHideModal={() => setOpen(false)}
        todo={todoInfo}
        onSave={handleSave}
      />

      <Text style={styles.todoTitle}>{todoInfo.title}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Edit title"
          color={THEME.EDIT_COLOR}
          onPress={() => setOpen(true)}
        />
        <View style={styles.button}>
          <Button
            title="Back"
            color={THEME.GREY_COLOR}
            onPress={() => handleSelectTodo(null)}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Delete"
            color={THEME.DANGER_COLOR}
            onPress={handleDeleteTodo}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  todoTitle: {
    textAlign: "center",
    color: THEME.WHITE_TEXT,
    fontSize: 26,
  },
  buttonsContainer: {
    height: "90%",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  button: {},
});
