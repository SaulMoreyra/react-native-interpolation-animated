import {
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Easing,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRef, useState, useEffect } from "react";

const getRandomNumber = (min = 0, max = 100) =>
  Math.random() * (max - min) + min;

const getRandomColor = () =>
  `rgb(
    ${getRandomNumber(100, 144)}, 
    ${getRandomNumber(10, 200)}, 
    ${getRandomNumber(200, 244)})
  `;

const { height, width } = Dimensions.get("window");

let heartCount = 0;
const ConffetiButton = (props) => {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    setHearts((old) => [
      ...old,
      {
        id: heartCount,
        right: getRandomNumber(100, width),
        color: getRandomColor(),
      },
    ]);
    heartCount++;
  };

  const removeHeart = (id) => {
    const newHearts = hearts.filter((heart) => heart.id !== id);
    setHearts(newHearts);
  };

  return (
    <>
      <View style={[styles.containerButton, props.style]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={addHeart}
          style={[styles.button]}
        >
          <AntDesign name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {hearts.map((heart) => (
          <HeartContainer
            key={heart.id}
            style={{ right: heart.right }}
            color={heart.color}
            onComplete={() => removeHeart(heart.id)}
          />
        ))}
      </View>
    </>
  );
};

const animationEndY = Math.ceil(height * 0.7);
const negativeEndY = animationEndY * -1;

const HeartContainer = ({ onComplete, color, ...props }) => {
  const animation = useRef(new Animated.Value(0)).current;

  const yAnimation = animation.interpolate({
    inputRange: [negativeEndY, 0],
    outputRange: [animationEndY, 0],
  });

  const opacityAnimation = yAnimation.interpolate({
    inputRange: [0, animationEndY],
    outputRange: [1, 0],
  });

  const scaleAnimation = yAnimation.interpolate({
    inputRange: [0, 15, 30],
    outputRange: [0, 1.6, 1],
    extrapolate: "clamp",
  });

  const xAnimation = yAnimation.interpolate({
    inputRange: [
      0,
      animationEndY / 6,
      animationEndY / 3,
      animationEndY / 2,
      animationEndY,
    ],
    outputRange: [0, 25, 15, 0, 10],
  });

  const rotateAnimation = yAnimation.interpolate({
    inputRange: [
      0,
      animationEndY / 6,
      animationEndY / 3,
      animationEndY / 2,
      animationEndY,
    ],
    outputRange: ["0deg", "-10deg", "0deg", "10deg", "0deg"],
  });

  useEffect(() => {
    Animated.timing(animation, {
      duration: 2000,
      toValue: negativeEndY,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const heartStyle = {
    transform: [
      { translateY: animation },
      { translateX: xAnimation },
      { scale: scaleAnimation },
      { rotate: rotateAnimation },
    ],
    opacity: opacityAnimation,
  };

  return (
    <Animated.View style={[styles.heartContainer, heartStyle, props.style]}>
      <Heart color={color} />
    </Animated.View>
  );
};

const Heart = (props) => (
  <View {...props} style={[styles.heart]}>
    <AntDesign name="heart" size={48} color={props.color} />
  </View>
);

const styles = StyleSheet.create({
  containerButton: {
    alignItems: "center",
    position: "absolute",
  },
  container: {
    position: "absolute",
    alignItems: "center",
    width,
    height,
  },
  button: {
    backgroundColor: "#f02a4b",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  heartContainer: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "transparent",
  },
  heart: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});

export default ConffetiButton;
