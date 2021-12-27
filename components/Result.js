import React from "react";
import { View, Text } from "react-native";
import data from "../data";
console.log(data[0]);
const select = data[0];

export default function Result() {
  return (
    <View>
      <Text>{select.ville}</Text>
      <Text>
        Lundi: {select.day1[0]} degrés, {select.day1[1]}
      </Text>
      <Text>
        Mardi: {select.day2[0]} degrés, {select.day2[1]}
      </Text>
      <Text>
        Mercredi: {select.day3[0]} degrés, {select.day3[1]}
      </Text>
      <Text>
        Jeudi: {select.day4[0]} degrés, {select.day4[1]}
      </Text>
      <Text>
        Vendredi: {select.day5[0]} degrés, {select.day5[1]}
      </Text>
    </View>
  );
}
