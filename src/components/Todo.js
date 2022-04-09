import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { THEME } from "../theme";

export function Todo({ todo, onRemove, handleSelectTodo }) {
  return (
    <TouchableOpacity
      onLongPress={() => onRemove(todo.id)}
      onPress={() => handleSelectTodo(todo.id)}
    >
      <View style={styles.todo}>
        <Text style={styles.text}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: THEME.LIGHT_GREY,
    borderRadius: 5,
    marginTop: 10,
  },
  text: {
    color: THEME.WHITE_TEXT,
  },
});
