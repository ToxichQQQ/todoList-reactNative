import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from "./src/components/Navbar";
import React from "react";
import {Form} from "./src/components/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title='Todo Application'/>
      <Form/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
