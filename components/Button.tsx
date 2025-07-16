import { theme } from "@/theme";
import * as Haptics from "expo-haptics";
import React from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";

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
    <Pressable
      onPress={handlePressed}
      style={(state) => {
        if (state.pressed) {
          return [styles.button, styles.buttonPressed];
        }
        return styles.button;
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colorWhite,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: theme.colorDefault,
  },
  buttonPressed: {
    backgroundColor: theme.colorDarkDefault,
  },
});
