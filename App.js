import { StyleSheet, View } from "react-native";
import ConffetiButton from "./components/ConffetiButton";
import FloattingButton from "./components/FloattingButton";
import RotationButton from "./components/RotationButton";
import SplashScreen from "./components/SplashScreen";
import SquareAnimated from "./components/SquareAnimated";
import TextFade from "./components/TextFade";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SplashScreen /> */}
      <ConffetiButton style={{ left: 40, bottom: 100 }} />
      <RotationButton style={{ left: 140, bottom: 100 }} />
      <FloattingButton style={{ left: 240, bottom: 100 }} />
      <TextFade>Hola cofi joto!</TextFade>
      <SquareAnimated />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
