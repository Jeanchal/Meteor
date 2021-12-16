import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

function DetailsScreen({ navigation }) {
  return (
    <View style={style.view}>
      <Text style={style.text}>Détails Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}

const style = StyleSheet.create({
  view: { flex: 1, alignItems: "center", justifyContent: "center" },
  button: { margin: 20 },
  text: { margin: 20 },
});

export default DetailsScreen;
