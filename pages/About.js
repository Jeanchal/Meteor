import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function About({ navigation }) {
  return (
    <View style={style.view}>
      <Text style={style.text}>A propos de moi</Text>
      <View style={style.button_container}>
        <Button
          style={style.button}
          title="Acceuil"
          onPress={() => navigation.navigate("Acceuil")}
        />
        <Button
          style={style.button}
          title="Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
      <View style={style.text_container}>
        <Text style={style.title}>A propos de moi</Text>
        <Text style={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          odit quisquam vitae quibusdam. Commodi recusandae omnis aspernatur
          eligendi odit aliquam. Aut saepe pariatur magnam ab labore amet totam
          incidunt qui.
        </Text>
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
  text_container: {
    margin: 10,
    paddingTop: 20,
    color: `#f0ffff`,
  },
  title: {
    fontSize: 22,
    color: `#f0ffff`,
    margin: 15,
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

export default About;
