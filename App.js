import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./components/About";
import Home from "./components/Search";

function HomeScreen({ navigation }) {
  return (
    <View style={style.view}>
      <Text style={style.text}>Home Screen</Text>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={style.view}>
      <Text style={style.text}>Détails Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  view: { flex: 1, alignItems: "center", justifyContent: "center" },
  button: { margin: 20 },
  text: { margin: 20 },
});

export default App;
