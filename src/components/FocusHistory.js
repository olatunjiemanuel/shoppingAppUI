import React from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

import RoundedBtn from "../RoundedBtn";
import { colors } from "../../util/colors";
import { fontSizes, spacing } from "../../util/sizes";

const styles = StyleSheet.create({
  focusItem: (status) => ({
    color: status > 1 ? "red" : "lime",
    fontSize: fontSizes.l,
  }),
  container: {
    flex: 0.5,
    alignItems: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    color: colors.white,
    fontSize: fontSizes.l,
    fontWeight: "bold",
    marginVertical: 20,
  },
  clear: {
    padding: spacing.m,
  },
});

const FocusHistory = ({ focusSubjects, onClear }) => {
  const focusItem = ({ item }) => {
    return <Text style={styles.focusItem(item.status)}>{item.subject}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.label}>Things You've Focused On:</Text>
        <FlatList
          data={focusSubjects}
          renderItem={focusItem}
          showsVerticalScrollIndicator={false}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ alignItems: "center" }}
        />
        <View style={styles.clear}>
          <RoundedBtn title={"Clear"} size={100} onPress={onClear} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FocusHistory;
