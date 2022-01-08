import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";

import CountDown from "../CountDown";
import Timing from "./Timing";
import RoundedBtn from "../RoundedBtn";
import { colors } from "../../util/colors";
import { spacing } from "../../util/sizes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countWrapper: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  focusOnWrapper: {
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontSize: spacing.l,
    fontWeight: "bold",
  },
  subject: {
    color: colors.white,
    fontSize: spacing.l,
  },
  progressBar: {
    height: 10,
    marginVertical: 10,
  },
  btnWrapper: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.l,
    paddingTop: 30,
  },
  clearBtn: {
    padding: spacing.m,
  },
});

const Timer = ({ focusItem, onClearSubject, onFocusEnd }) => {
  const [minutes, setMinutes] = useState(1);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  //Vibrate function
  const onVibrate = () => {
    Vibration.vibrate(4000);
  };

  const onEnd = () => {
    onVibrate();
    setIsStarted(false);
    setProgress(1);
    setMinutes(0.5);
    onFocusEnd();
  };

  const changeTime = (min) => {
    setMinutes(min);
    console.log(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countWrapper}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onTimerEnd={onEnd}
        />
      </View>

      <View style={styles.focusOnWrapper}>
        <Text style={styles.title}>We're focusing on:</Text>
        <Text style={styles.subject}>{focusItem}</Text>
      </View>

      <ProgressBar
        color={colors.lightBlue}
        progress={progress}
        style={styles.progressBar}
      />

      <Timing onChangeTime={changeTime} />

      <View style={styles.btnWrapper}>
        {isStarted ? (
          <RoundedBtn title={"Pause"} onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedBtn title={"Start"} onPress={() => setIsStarted(true)} />
        )}
      </View>

      <View style={styles.clearBtn}>
        <RoundedBtn title={"-"} size={75} onPress={() => onClearSubject()} />
      </View>
    </View>
  );
};

export default Timer;
