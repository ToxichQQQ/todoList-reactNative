import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { THEME } from "../theme";

export function NoTodos() {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/no-items.png")}
      />
      <Text style={styles.text}>TodoList is empty</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 350,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginBottom: 10,
  },
  text: {
    color: THEME.WHITE_TEXT,
    fontWeight: "bold",
    fontSize: 24,
  },
});
