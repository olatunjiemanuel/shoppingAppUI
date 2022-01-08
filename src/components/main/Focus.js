import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import RoundedBtn from "../RoundedBtn";
import { spacing } from "../../util/sizes";
import { colors } from "../../util/colors";

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerWrapper: {
    flex: 1,
    justifyContent: "center",
    padding: spacing.m,
  },
  title: {
    color: colors.white,
    fontSize: spacing.l,
    fontWeight: "bold",
    marginVertical: spacing.s,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.s,
  },
});

const Focus = ({ onChangeValue }) => {
  const [subjectValue, setSubjectValue] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <Text style={styles.title}>What would you like to focus on?</Text>

        <View>
          <TextInput
            onChangeText={(val) => setSubjectValue(val)}
            style={styles.input}
          />
          <RoundedBtn
            title={"+"}
            size={50}
            onPress={() => onChangeValue(subjectValue)}
          />
        </View>
      </View>
    </View>
  );
};

export default Focus;
