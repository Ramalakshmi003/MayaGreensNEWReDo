import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ButtonGrey1({ value }) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
      }}
    >
      <TouchableOpacity
        style={{
          height: 45,
          width: 300,
          borderRadius: 25,
          backgroundColor: "grey",
          top: 160
        }}
      >
        <Text
          style={{
            textAlign: "center",
            top: 7,
            fontSize: 20,
            fontWeight: 700,
            color: "white"
          }}
        >
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
