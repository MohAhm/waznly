import { theme } from "@/theme";
import * as Haptics from "expo-haptics";
import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { Button as PaperButton } from "react-native-paper";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
  const handlePressed = () => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress();
  };

  return (
    <PaperButton style={styles.button} mode="contained" onPress={handlePressed}>
      <Text style={styles.text}>{title}</Text>
    </PaperButton>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.white,
  },
  button: {
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
  },
  buttonPressed: {
    backgroundColor: theme.colors.accent,
  },
});
