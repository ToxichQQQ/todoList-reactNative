import React, {useContext, useState} from 'react'
import {View, StyleSheet, Alert} from "react-native";
import {Navbar} from "./components/Navbar";
import {THEME} from "./theme";
import {MainScreen} from "./screens/MainScreen";
import {TodoInfoScreen} from "./screens/TodoInfoScreen";
import {TodoContext} from "./context/todo/TodoContext";


export const MainLayout = () => {
    const {todos, handleAddTodo, handleDeleteTodo,handleUpdateTodo} = useContext(TodoContext)


    const [todoId, setTodoId] = useState(null);

    const handleSelectTodo = (id) => {
        setTodoId(id);
    };


/*    const handleRemoveTodo = (id) => {
        const todoInfo = todos.find((todo) => todo.id === id);
        Alert.alert(
            "Delete this Todo",
            `Do you really want to delete this ${todoInfo.title}`,
            [
                {text: "Cancel", style: "cancel"},
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => setTodos(todos.filter((todo) => todo.id !== id)),
                },
            ],
            {cancelable: false}
        );
    };*/

    let content = (
        <MainScreen
            handleAddTodo={handleAddTodo}
            handleRemoveTodo={handleDeleteTodo}
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
                handleRemoveTodo={handleDeleteTodo}
            />
        );
    }

    return(
        <View style={styles.container}>
            <Navbar title="Todo Application" />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.BACKGROUND_COLOR,
        color: THEME.WHITE_TEXT,
    },
 });
