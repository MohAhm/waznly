import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import { Link, Redirect, Tabs } from "expo-router";
import { Pressable } from "react-native";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );

  if (hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerTitle: "",
        headerTransparent: true,
        tabBarActiveTintColor: theme.colorCornflowerBlue,
        tabBarInactiveTintColor: theme.backgroundColorBlueHaze,
        tabBarStyle: {
          height: 100,
          paddingTop: 10,
          borderTopWidth: 0,
          backgroundColor: theme.backgroundColorShark,
        },
        headerRight: () => (
          <Link href="/add" asChild>
            <Pressable hitSlop={20} style={{ marginRight: 18 }}>
              <AntDesign
                name="pluscircleo"
                size={24}
                color={theme.colorCornflowerBlue}
              />
            </Pressable>
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Weight",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="weight" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="graph"
        options={{
          title: "Graph",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="graph" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ size, color }) => (
            <Octicons name="clock" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
