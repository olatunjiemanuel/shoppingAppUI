import React from "react";
import { View, StyleSheet } from "react-native";

import { spacing } from "../../util/sizes";
import RoundedBtn from "../RoundedBtn";

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: spacing.m,
  },
});

const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.container}>
      <RoundedBtn title={5} size={75} onPress={() => onChangeTime(5)} />
      <RoundedBtn title={10} size={75} onPress={() => onChangeTime(10)} />
      <RoundedBtn title={15} size={75} onPress={() => onChangeTime(15)} />
    </View>
  );
};

export default Timing;
