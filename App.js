import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {Navbar} from "./src/components/Navbar";
import React,{useState} from "react";
import {Form} from "./src/components/Form";
import {Todo} from "./src/components/Todo";

export default function App() {
    const [todos,setTodos] = useState([])

    const handleAddTodo = (title) => {
        setTodos([...todos,{id:Date.now().toString(),title, isDone: false}])
    }

    const handleRemoveTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

  return (
    <View style={styles.container}>
      <Navbar title='Todo Application'/>
      <Form onSubmit={handleAddTodo}/>
      <FlatList data={todos} renderItem={({item}) => <Todo onRemove={handleRemoveTodo} todo={item} />}
      keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
      color:'#fff'
  },
});
