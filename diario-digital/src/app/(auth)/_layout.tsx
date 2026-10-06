import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from "@react-native-vector-icons/material-icons";

import { Cores } from "@/constants/Cores";
import { Fontes } from "@/constants/Fontes";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,

        tabBarActiveTintColor: Cores.border2,
        tabBarInactiveTintColor: Cores.basic,

        tabBarStyle: {
          backgroundColor: Cores.fundo2,
          borderTopWidth: 0,
          paddingTop: 8,
          paddingBottom: insets.bottom || 12,
          height: 65 + (insets.bottom || 0),
        },

        tabBarLabelStyle: {
          fontFamily: Fontes.baseRegular,
          fontSize: Fontes.pequeno,
        },
      }}
    >
      <Tabs.Screen
        name="registrar"
        options={{
          title: "Registrar",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="edit-note" size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="registros"
        options={{
          title: "Registros",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="menu-book" size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="sobre"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="info-outline" size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-outline" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}