import React from "react";
import { View, ScrollView } from "react-native";
import { Button, Card, Text, Badge, Icon } from "@rneui/themed";

export function Noticias() {
  const data = [
    {
      titulo:
        "Checo Pérez sancionado con tres posiciones en la parrilla del GP de España.",
      imagen:
        "https://cdn-8.motorsport.com/images/amp/0oO3m4x0/s1000/sergio-perez-red-bull-racing-r.webp",
      categoria: "Deportes",
    },
    {
      titulo:
        "¿Real Madrid asistirá al Súper Mundial? La postura del DT y del equipo al evento de la FIFA?",
      imagen:
        "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/lxe9mu744i9mxuzt1b36",
      categoria: "Deportes",
    },
    {
      titulo: "Arranca primera reunión de transición entre Sheinabum y AMLO",
      imagen:
        "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/a056/live/f7477d40-1d63-11ef-9a5b-cf397db5bd66.jpg.webp",
      categoria: "Nacional",
    },
  ];

  return (
    <View>
      <View style={{ marginTop: 45 }}>
        <Text
          h4
          style={{ fontWeight: "bold", textAlign: "center", marginBottom: 30 }}
        >
          Noticias
        </Text>
      </View>
      <ScrollView style={{ marginBottom: 150 }}>
        {data.map((d, index) => (
          <Card key={index}>
            <Card.Image source={{ uri: d.imagen }}></Card.Image>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <Card.Title style={{ fontSize: 16 }}>
                <Text>{d.titulo}</Text>
              </Card.Title>
              <Badge
                value={d.categoria}
                status="error"
                textStyle={{ fontSize: 14 }}
                containerStyle={{ margin: 5 }}
              />
            </View>
            <Card.Divider />
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <Button radius={"md"} type="solid">
                <Icon name="visibility" color="white" />
                Ver más
              </Button>
              <Button radius={"md"} type="solid" color={"secondary"}>
                <Icon name="share" color="white" />
                Compartir
              </Button>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
export default Noticias;
