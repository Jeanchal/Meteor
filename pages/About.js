import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function About({ navigation }) {
  return (
    <View style={style.view}>
      <Text style={style.text}>A propos de moi</Text>
      <View style={style.button_container}>
        <Button
          style={style.button}
          title="Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          style={style.button}
          title="Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
      <Text style={style.title}>A propos de moi</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus odit
        quisquam vitae quibusdam. Commodi recusandae omnis aspernatur eligendi
        odit aliquam. Aut saepe pariatur magnam ab labore amet totam incidunt
        qui.
      </Text>
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
  title: {
    fontSize: 22,
    marginBottom: 20,
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

export default About;
