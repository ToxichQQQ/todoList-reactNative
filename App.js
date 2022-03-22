import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from "./src/components/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title='Todo Application'/>
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
