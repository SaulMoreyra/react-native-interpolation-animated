import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

const { height, width } = Dimensions.get("window");

const animationEndY = Math.ceil(height * 1);
const negativeEndY = animationEndY * -1;

const SplashScreen = () => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animation, {
      toValue: negativeEndY,
      friction: 7,
      useNativeDriver: true,
      delay: 1000,
    }).start();
  }, [animation]);

  const translatorScale = { transform: [{ translateY: animation }] };

  return (
    <Animated.View style={[styles.animated, translatorScale]}>
      <View style={styles.container}>
        <Text style={styles.text}>Hola</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animated: {
    position: "absolute",
  },
  container: {
    width: width,
    height: height * 1.2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  text: {
    color: "#fff",
  },
});

export default SplashScreen;
