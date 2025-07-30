import Button from "@/components/Button";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
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
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[
            theme.colorCornflowerBlue,
            theme.colorGrapeBlue,
            theme.colorMalibuBlue,
          ]}
          style={styles.card}
        >
          <Text style={styles.text}>My weight</Text>
        </LinearGradient>
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
});
