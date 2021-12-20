import React, { useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <View style={style.view}>
      <TextInput
        style={style.input}
        id="recherche"
        placeholder="Météo"
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase());
        }}
      />
      <FontAwesomeIcon icon={faSearch} />
      <Text style={style.result}>{search}</Text>
      <Image
        style={style.image}
        source={require("../images/familles-biere.jpg")}
      />
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    marginTop: 10,
    backgroundColor: "#fff",
    width: "85%",
    height: 40,
    padding: 10,
    borderRadius: 10,
  },
  result: {
    margin: 5,
    padding: 5,
    fontSize: "110%",
  },
  image: {
    width: "85%",
    height: "30%",
    borderRadius: 10,
  },
});
