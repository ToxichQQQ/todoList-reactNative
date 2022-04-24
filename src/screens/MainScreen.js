import React, {useCallback, useContext, useEffect} from "react";
import { Form } from "../components/Form";
import { FlatList, View,Text } from "react-native";
import { Todo } from "../components/Todo";
import {TodoContext} from "../context/todo/TodoContext";
import {ScreenContext} from "../context/screen/ScreenContext";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";

export function MainScreen() {
  const {todos,error,handleAddTodo, handleRemoveTodo,handleFetchTodos,showLoader} = useContext(TodoContext)
    const {handleChangeScreen} = useContext(ScreenContext)

    const handleLoadTodos = useCallback(async () => await handleFetchTodos(),[handleFetchTodos] )


    useEffect(() =>{
        handleLoadTodos()
    },[])

    if (showLoader) {
        return <Loader/>;
    }

    if (error){
        return <ErrorMessage error={error} loadAgain={handleLoadTodos}/>
    }

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

  return (
    <View>
      <Form onSubmit={handleAddTodo} />
      {content}
    </View>
  );
}
