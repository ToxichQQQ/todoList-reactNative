import { StyleSheet, Text, View, Alert } from "react-native";
import { Navbar } from "./src/components/Navbar";
import React, { useState } from "react";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoInfoScreen } from "./src/screens/TodoInfoScreen";
import { THEME } from "./src/theme";

export default function App() {
  const [todos, setTodos] = useState([
    { id: Date.now().toString(), title: "Дать пизды Сане", isDone: false },
  ]);
  const [todoId, setTodoId] = useState(null);

  const handleAddTodo = (title) => {
    setTodos([...todos, { id: Date.now().toString(), title, isDone: false }]);
  };

  const handleSelectTodo = (id) => {
    setTodoId(id);
  };

  const handleUpdateTodo = (id, title) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  const handleRemoveTodo = (id) => {
    const todoInfo = todos.find((todo) => todo.id === id);
    Alert.alert(
      "Delete this Todo",
      `Do you really want to delete this ${todoInfo.title}`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => setTodos(todos.filter((todo) => todo.id !== id)),
        },
      ],
      { cancelable: false }
    );
  };

  let content = (
    <MainScreen
      handleAddTodo={handleAddTodo}
      handleRemoveTodo={handleRemoveTodo}
      handleSelectTodo={handleSelectTodo}
      todos={todos}
    />
  );

  if (todoId) {
    const todoInfo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoInfoScreen
        handleUpdateTodo={handleUpdateTodo}
        todoInfo={todoInfo}
        handleSelectTodo={handleSelectTodo}
        handleRemoveTodo={handleRemoveTodo}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Navbar title="Todo Application" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND_COLOR,
    color: THEME.WHITE_TEXT,
  },
});
