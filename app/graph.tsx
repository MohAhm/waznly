import { StyleSheet, Text, View } from "react-native";
import { theme } from "../them";

export default function GraphScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Graph</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
