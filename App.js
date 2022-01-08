import React, { useState, useEffect } from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { colors } from "./src/util/colors";
import Timer from "./src/components/main/Timer";
import Focus from "./src/components/main/Focus";
import FocusHistory from "./src/components/main/FocusHistory";

const STATUS = {
  complete: 1,
  failure: 2,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === "ios" ? 35 : StatusBar.currentHeight,
  },
});

export default function App() {
  const [focusSubject, setFocusSubject] = useState();
  const [focusSubjectsHistory, setFocusSubjectsHistory] = useState([]);

  const addFocusHistoryWithStatus = (subject, status) => {
    setFocusSubjectsHistory([
      ...focusSubjectsHistory,
      { subject, status, key: String(Math.random() * 1000) },
    ]);
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(
        "focusHistory",
        JSON.stringify(focusSubjectsHistory)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const result = await AsyncStorage.getItem("focusHistory");
      if (result && JSON.parse(result).length) {
        setFocusSubjectsHistory(JSON.parse(result));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    saveData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusSubjectsHistory]);

  useEffect(() => {
    getData();
  }, []);

  const onClear = () => {
    setFocusSubjectsHistory([]);
  };

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusItem={focusSubject}
          onClearSubject={() => {
            addFocusHistoryWithStatus(focusSubject, STATUS.failure);
            setFocusSubject(null);
          }}
          onFocusEnd={() => {
            addFocusHistoryWithStatus(focusSubject, STATUS.complete);
            setFocusSubject(null);
          }}
        />
      ) : (
        <>
          <Focus onChangeValue={setFocusSubject} />
          <FocusHistory
            focusSubjects={focusSubjectsHistory}
            onClear={onClear}
          />
        </>
      )}
    </View>
  );
}
