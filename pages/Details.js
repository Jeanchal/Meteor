import React from "react";
import { View, Text, StyleSheet } from "react-native";

function DetailsScreen() {
  return (
    <View style={style.view}>
      <Text style={style.text}>Détails Screen</Text>
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
  text: { color: `#f0ffff`, margin: 15 },
});

export default DetailsScreen;
