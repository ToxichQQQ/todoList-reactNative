import React, {useContext} from "react";
import { Form } from "../components/Form";
import { FlatList, View } from "react-native";
import { Todo } from "../components/Todo";
import { NoTodos } from "../components/NoTodos";
import {TodoContext} from "../context/todo/TodoContext";
import {ScreenContext} from "../context/screen/ScreenContext";

export function MainScreen() {
  const {todos,handleAddTodo, handleRemoveTodo} = useContext(TodoContext)
    const {handleChangeScreen} = useContext(ScreenContext)

  let content = (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Todo
          onRemove={handleRemoveTodo}
          todo={item}
          handleSelectTodo={handleChangeScreen}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );

  if (todos.length === 0) {
    content = <NoTodos />;
  }

  return (
    <View>
      <Form onSubmit={handleAddTodo} />
      {content}
    </View>
  );
}
