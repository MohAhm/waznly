import { theme } from "@/them";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function GraphScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.text}>Graph</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.backgroundColor,
  },
  text: {
    fontSize: 24,
    color: theme.colorWhite,
  },
});
