import { type TextProps, StyleSheet, View } from "react-native";
import { Icon, Button } from "@rneui/themed";

const data = [
  { name: "Formulario", ruta: "form", icon: "groups", color: "#FC947D" },
  {
    name: "Materias",
    ruta: "Materias",
    icon: "book",
    color: "#1369FF",
  },
  { name: "Noticias", ruta: "Noticias", icon: "newspaper", color: "#FC947D" },
  { name: "Eventos", ruta: "Eventos", icon: "event", color: "#EF7DFC" },
];

export function ThemedText({ navigation }: { navigation: any }) {
  return (
    <>
      <View style={{ marginTop: 50 }}>
        {data.map((d, index) => (
          <View key={index}>
            <Button
              title={d.name}
              icon={<Icon name={d.icon} size={50} color="white" />}
              buttonStyle={{
                backgroundColor: d.color,
                borderRadius: 10,
                padding: 10,
                flexDirection: "column",
              }}
              containerStyle={{ margin: 5 }}
              iconContainerStyle={{ marginBottom: 10 }}
              titleStyle={{ textAlign: "center" }}
              onPress={() => navigation.navigate(d.ruta)}
            ></Button>
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
