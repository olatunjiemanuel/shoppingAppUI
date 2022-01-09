import React from "react";
import { StyleSheet, Text, View } from "react-native";

const cartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>cartScreen!</Text>
    </View>
  );
};

export default cartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
