import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Search from "../components/Search";

function HomeScreen({ navigation }) {
  return (
    <View style={style.view}>
      <Text style={style.text}>Acceuil</Text>
      <View style={style.button_container}>
        <Button
          style={style.button}
          title="Details"
          onPress={() => navigation.navigate("Details")}
        />
        <Button
          style={style.button}
          title="About"
          onPress={() => navigation.navigate("About")}
        />
      </View>
      <Search />
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: `#0289`,
  },
  button_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "45%",
  },
  button: {
    width: 30,
  },
  text: { color: `#f0ffff`, margin: 15 },
});

export default HomeScreen;
