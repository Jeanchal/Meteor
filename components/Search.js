import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import Result from "./Result";

export default function Home({ data }) {
  const [search, setSearch] = useState("");
  let result = data;

  return (
    <View style={style.view}>
      <View style={style.searchContainer}>
        <TextInput
          style={style.input}
          id="recherche"
          placeholder="Ville..."
          onFocus={style.focus}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <Icon name="search" style={style.searchIcon} size={20} />
      </View>
      <Text style={style.result}>{search}</Text>
      <View>
        <Result />
      </View>
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
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "85%",
    height: 40,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  input: {
    width: "92%",
  },
  searchIcon: {
    color: "#8a8a8a",
    paddingBottom: 2,
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
