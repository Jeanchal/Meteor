import React from "react";
import StyleSheet from "react-native";

function style() {
  const style = StyleSheet.create({
    view: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: `#0289`,
    },
    title: {
      fontSize: 22,
      marginBottom: 20,
    },
    button: { margin: 20 },
    text: { margin: 20, color: `#f0ffff` },
  });
}

export default style;
