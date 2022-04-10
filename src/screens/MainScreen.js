import React from "react";
import { Form } from "../components/Form";
import { FlatList, View } from "react-native";
import { Todo } from "../components/Todo";
import {NoTodos} from "../components/NoTodos";

export function MainScreen({
  handleAddTodo,
  handleRemoveTodo,
  handleSelectTodo,
  todos,
}) {
    let content = <FlatList
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

    if (todos.length === 0){
        content = <NoTodos/>
    }

  return (
    <View>
      <Form onSubmit={handleAddTodo} />
        {content}
    </View>
  );
}
