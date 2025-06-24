import { theme } from "@/them";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  useEffect(() => {
    setStatusBarStyle("light");
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.text}>
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colorWhite,
  },
});
