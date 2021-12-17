import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

function DetailsScreen({ navigation }) {
  return (
    <View style={style.view}>
      <Text style={style.text}>Détails Screen</Text>
      <View style={style.button_container}>
        <Button
          style={style.button}
          title="Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          style={style.button}
          title="About"
          onPress={() => navigation.navigate("About")}
        />
      </View>
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
  text: { margin: 20, color: `#f0ffff` },
});

export default DetailsScreen;
