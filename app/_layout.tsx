import { theme } from "@/theme";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade" }}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          presentation: "modal",
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="add"
        options={{
          title: "Add Weight",
          headerTintColor: theme.colors.white,
          headerTransparent: true,
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
