import Button from "@/components/Button";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  useEffect(() => {
    setStatusBarStyle("light");
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.text}>My weight</Text>
        <Button title="Back to onboarding" onPress={toggleHasOnboarded} />
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
    paddingBottom: 20,
  },
});
