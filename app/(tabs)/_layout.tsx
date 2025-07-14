import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import { Redirect, Tabs } from "expo-router";

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
        headerShown: false,
        tabBarActiveTintColor: theme.colorDefault,
        tabBarInactiveTintColor: theme.tabBarInactiveTintColor,
        tabBarStyle: {
          height: 100,
          paddingTop: 10,
          borderTopWidth: 0,
          backgroundColor: theme.tabBarBackgroundColor,
        },
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
