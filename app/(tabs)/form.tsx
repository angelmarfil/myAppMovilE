import React from "react";
import { View, ScrollView } from "react-native";
import { Input } from "@rneui/themed";
import { Button, Card, Text, Badge, Icon } from "@rneui/themed";

export function Form() {
  return (
    <View>
      <View style={{ marginTop: 45 }}>
        <Text
          h4
          style={{ fontWeight: "bold", textAlign: "center", marginBottom: 30 }}
        >
          Formulario
        </Text>
      </View>
      <ScrollView
        style={{
          marginBottom: 150,
          marginHorizontal: 20,
        }}
      >
        <Input placeholder="Nombre" />
        <Input placeholder="Correo Electrónico" />
        <Input placeholder="Contraseña" secureTextEntry={true} />
      </ScrollView>
    </View>
  );
}
export default Form;
