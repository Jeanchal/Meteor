import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Logo() {
  return (
    <View style={style.logo}>
      <FontAwesomeIcon icon={faArrowLeft} style={style.arrow} />
      <Text style={style.text}>Cervoiz</Text>
    </View>
  );
}

const style = StyleSheet.create({
  arrow: {
    paddingTop: 22,
    fontSize: "150%",
    position: "relative",
    left: "25",
  },
  logo: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
  },
  text: {
    margin: 15,
    paddingRight: 12,
    textAlign: "center",
    fontSize: "150%",
    width: "100%",
  },
});
