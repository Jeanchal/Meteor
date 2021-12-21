import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import About from "./pages/About";
import Home from "./pages/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Acceuil"
        activeColor="#0074cf"
        inactiveColor="#ccc"
        barStyle={{ backgroundColor: "#fff" }}
      >
        <Tab.Screen
          name="Acceuil"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={35} />
            ),
            tabBarLabel: false,
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="white-balance-sunny"
                color={color}
                size={35}
              />
            ),
            tabBarLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
