import React from "react";
import { View, Text, StyleSheet } from "react-native";
import data from "../data";
console.log(data[0]);
const select = data[0];

export default function Result() {
  return (
    <View style={style.resultContainer}>
      <Text style={style.villeContainer}>{select.ville}</Text>
      <View style={style.dayContainer}>
        <Text>Lundi</Text>
        <Text>
          {select.day1[0]}°C, {select.day1[1]}
        </Text>
      </View>
      <View style={style.dayContainer}>
        <Text>Mardi</Text>
        <Text>
          {select.day2[0]}°C, {select.day2[1]}
        </Text>
      </View>
      <View style={style.dayContainer}>
        <Text>Mercredi</Text>
        <Text>
          {select.day3[0]}°C, {select.day3[1]}
        </Text>
      </View>
      <View style={style.dayContainer}>
        <Text>Jeudi</Text>
        <Text>
          {select.day4[0]}°C, {select.day4[1]}
        </Text>
      </View>
      <View style={style.dayContainer}>
        <Text>Vendredi</Text>
        <Text>
          {select.day5[0]}°C, {select.day5[1]}
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  resultContainer: {
    width: "50vh",
    flex: 1,
    alignItems: "center",
  },
  villeContainer: {
    backgroundColor: "#ffa",
    width: "95%",
    margin: 2,
    padding: 5,
  },
  dayContainer: {
    backgroundColor: "#fff",
    width: "95%",
    margin: 2,
    padding: 5,
  },
});
