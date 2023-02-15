import React, { useRef, useEffect } from "react";
import { StyleSheet, Animated } from "react-native";

const SIZE = 100;

const SquareAnimated = () => {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(progress, { toValue: 1, useNativeDriver: true }),
          Animated.spring(progress, { toValue: 0.5, useNativeDriver: true }),
        ]),
        Animated.sequence([
          Animated.spring(scale, { toValue: 2, useNativeDriver: true }),
          Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
        ]),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.square,
        {
          borderRadius: progress.interpolate({
            inputRange: [0.5, 1],
            outputRange: [SIZE / 4, SIZE / 2],
          }),
          opacity: progress,
          transform: [
            {
              scale,
            },
            {
              rotate: progress.interpolate({
                inputRange: [0.5, 1],
                outputRange: ["180deg", "360deg"],
              }),
            },
          ],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "purple",
  },
});

export default SquareAnimated;
