import { StyleSheet, Text, View } from "react-native";
import CoffetiButton from "./CoffetiButton";
import FloattingButton from "./FloattingButton";
import RotationButton from "./RotationButton";

export default function App() {
  return (
    <View style={styles.container}>
      <RotationButton style={{ left: 20, bottom: 100 }} />
      <FloattingButton style={{ left: 80, bottom: 100 }} />
      <CoffetiButton style={{ left: 140, bottom: 100 }} />
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
