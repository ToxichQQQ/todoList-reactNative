import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoInfoScreen } from "./src/screens/TodoInfoScreen";
import {TodoState} from "./src/context/todo/TodoState";
import {MainLayout} from "./src/MainLayout";

export default function App() {

  return <TodoState>
    <MainLayout/>
  </TodoState>
}
