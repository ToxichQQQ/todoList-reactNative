import React, {useContext, useState} from "react";
import { Text, StyleSheet, View, Button, Dimensions } from "react-native";
import { THEME } from "../theme";
import { EditModal } from "../components/EditModal";
import {TodoContext} from "../context/todo/TodoContext";
import {ScreenContext} from "../context/screen/ScreenContext";

export function TodoInfoScreen({
}) {
  const {handleUpdateTodo, handleRemoveTodo,todos} = useContext(TodoContext)
  const { handleChangeScreen,todoId } = useContext(ScreenContext)
  const [isOpen, setOpen] = useState(false);

  const todoInfo = todos.find(item => item.id === todoId)

  const handleSave = (title) => {
    handleUpdateTodo(todoInfo.id, title);
    setOpen(false);
  };

  const handleDeleteTodo = () => {
    handleChangeScreen(null);
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
            onPress={() => handleChangeScreen(null)}
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
    height: Dimensions.get("screen").height * 0.7,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  button: {},
});
