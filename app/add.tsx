import { theme } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

export default function AddWeightScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Weight</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: theme.colors.white,
  },
});
