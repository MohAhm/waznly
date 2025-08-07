import Button from "@/components/Button";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";

export default function App() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  useEffect(() => {
    setStatusBarStyle("light");
  }, []);

  const handleAddWeight = () => {
    // Logic to add weight would go here
    router.push("/add");
    console.log("Add weight button pressed");
  };

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[
            theme.colors.primary,
            theme.colors.premium,
            theme.colors.malibu,
          ]}
          style={styles.card}
        >
          <Text style={styles.text}>My weight</Text>
        </LinearGradient>
        <Button title="Back to onboarding" onPress={toggleHasOnboarded} />
        {/* <Button title="Add weight" onPress={handleAddWeight} /> */}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.white,
    paddingBottom: 20,
    fontSize: 34,
    fontWeight: "bold",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  upperButton: {
    marginBottom: 20,
  },
});
