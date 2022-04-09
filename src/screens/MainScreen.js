import React from "react";
import { Form } from "../components/Form";
import { FlatList, View } from "react-native";
import { Todo } from "../components/Todo";

export function MainScreen({
  handleAddTodo,
  handleRemoveTodo,
  handleSelectTodo,
  todos,
}) {
  return (
    <View>
      <Form onSubmit={handleAddTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Todo
            onRemove={handleRemoveTodo}
            todo={item}
            handleSelectTodo={handleSelectTodo}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
