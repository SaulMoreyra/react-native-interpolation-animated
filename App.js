import { StyleSheet, View } from "react-native";
import ConffetiButton from "./ConffetiButton";
import FloattingButton from "./FloattingButton";
import RotationButton from "./RotationButton";
import TextFade from "./TextFade";

export default function App() {
  return (
    <View style={styles.container}>
      <ConffetiButton style={{ left: 40, bottom: 100 }} />
      <RotationButton style={{ left: 140, bottom: 100 }} />
      <FloattingButton style={{ left: 240, bottom: 100 }} />
      <TextFade>Hola cofi joto!</TextFade>
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
