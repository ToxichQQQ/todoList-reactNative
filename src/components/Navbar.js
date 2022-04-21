import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../theme";

export function Navbar({ title }) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 90,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    color: THEME.WHITE_TEXT,
    fontSize: 24,
  },
});
