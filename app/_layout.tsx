import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";
import { theme } from "../them";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorDefault }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="user" size={size} color={color} />
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
