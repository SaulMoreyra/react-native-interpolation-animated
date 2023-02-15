import React, { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";

const TextFade = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const textStyle = {
    opacity: fadeAnim,
    transform: [
      {
        scale: fadeAnim.interpolate({
          inputRange: [0, 0.2, 1],
          outputRange: [1, 1.5, 1],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        ...textStyle, // Bind opacity to animated value
      }}
    >
      <Text style={{ fontSize: 28 }}>{props.children}</Text>
    </Animated.View>
  );
};

export default TextFade;
