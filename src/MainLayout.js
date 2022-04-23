import React, { useContext, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Navbar } from "./components/Navbar";
import { THEME } from "./theme";
import { MainScreen } from "./screens/MainScreen";
import { TodoInfoScreen } from "./screens/TodoInfoScreen";
import { TodoContext } from "./context/todo/TodoContext";
import {ScreenContext} from "./context/screen/ScreenContext";

export const MainLayout = () => {

  const {todoId} = useContext(ScreenContext)

  return (
    <View style={styles.container}>
      <Navbar title="Todo Application" />
      {todoId ? <TodoInfoScreen/> : <MainScreen/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND_COLOR,
    color: THEME.WHITE_TEXT,
  },
});
