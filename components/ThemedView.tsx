import { Button } from "react-native";

export function ThemedView({ navigation }: any) {
  return (
    <Button
      title={"Holaaa"}
      onPress={() => navigation.navigate("Screen2")}
    ></Button>
  );
}
