import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = (size) =>
  StyleSheet.create({
    container: {
      height: size,
      width: size,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#FFF",
      borderWidth: 2,
      borderRadius: size / 2,
    },
    title: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: size / 3,
    },
  });

const RoundedBtn = ({ size = 125, onPress, ...props }) => {
  return (
    <TouchableOpacity style={styles(size).container} onPress={onPress}>
      <Text style={styles(size).title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedBtn;
