import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import About from "./pages/About";
import DetailsScreen from "./pages/Details";
import HomeScreen from "./pages/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Acceuil"
        activeColor="#FBC95C"
        inactiveColor="#ccc"
        barStyle={{ backgroundColor: "#fff" }}
      >
        <Tab.Screen
          name="Acceuil"
          component={HomeScreen}
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
              <MaterialCommunityIcons name="account" color={color} size={35} />
            ),
            tabBarLabel: false,
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={35} />
            ),
            tabBarLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
