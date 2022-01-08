import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../util/colors";
import { spacing } from "../util/sizes";

const styles = StyleSheet.create({
  container: {
    padding: spacing.l,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
  },
  time: {
    color: colors.white,
    fontSize: spacing.xxxl,
  },
});

//Converter Function
const minutesToMilliseconds = (min) => min * 1000 * 60;

//Proper time formatting. (if time < 2digits, return time with a 0 behind it)
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const CountDown = ({ minutes, isPaused, onProgress, onTimerEnd }) => {
  const [milliseconds, setMilliseconds] = useState(
    minutesToMilliseconds(minutes)
  );
  const interval = useRef();

  const min = Math.floor((milliseconds * 0.001) / 60) % 60;
  const sec = Math.floor(milliseconds * 0.001) % 60;

  const counter = () => {
    setMilliseconds((time) => {
      if (time === 0) {
        return 0;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMilliseconds(minutesToMilliseconds(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(counter, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  useEffect(() => {
    onProgress(milliseconds / minutesToMilliseconds(minutes));
    if (milliseconds === 0) {
      onTimerEnd();
      clearInterval(interval.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [milliseconds]);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{`${formatTime(min)}:${formatTime(sec)}`}</Text>
    </View>
  );
};

export default CountDown;
