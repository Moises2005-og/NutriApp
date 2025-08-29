import { Bars } from "@/components/bars";
import { foodImages } from "@/utils/mockData";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import { useState } from "react";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function FoodDetails() {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const [activeButton, setActiveButton] = useState<boolean>(false);
  const [modal, setModal] = useState(false);
  const { title, grams, image, protein, qtd }: any = route.params;

  return (
    <>
      <View style={styles.container}>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 30,
              alignItems: "center",
              width: "100%",
              paddingHorizontal: 5,
              paddingVertical: 5,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                source={require("../../assets/images/Back button.png")}
                style={{ width: 60 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveButton(!activeButton)}>
              <Image
                source={
                  activeButton
                    ? require("../../assets/images/buttonActive.png")
                    : require("../../assets/images/Love Button.png")
                }
                resizeMode="contain"
                style={{ width: 65, borderRadius: 100 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "#fff",
              borderTopRightRadius: 40,
              borderTopLeftRadius: 40,
              height: "100%",
              padding: 25,
            }}
          >
            <Image source={foodImages[image]} style={styles.image} />
            <View style={{ marginTop: "70%" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 24,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                {title}
              </Text>
              <View
                style={{ flexDirection: "row", justifyContent: "center", gap: 30 }}
              >
                <View>
                  <Text style={styles.energy}>Energia</Text>
                  <Text style={styles.energy}>221,15 kcal</Text>
                </View>
                <View>
                  <Text style={styles.energy}>Porção</Text>
                  <Text style={styles.energy}>240 grams</Text>
                </View>
              </View>

              <View
                style={{ flexDirection: "column", gap: 10, marginBottom: 35 }}
              >
                <Bars protein={protein} qtd={qtd} title="Proteínas" />
                <Bars protein={grams} qtd={qtd} title="Carboidratos" />
                <Bars protein={protein} qtd={qtd} title="Açúcar" />
                <Bars protein={grams} qtd={qtd} title="Gorduras" />
              </View>

              <TouchableOpacity onPress={() => setModal(true)}>
                <Text style={styles.button}>Mais detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Modal visible={modal} animationType="slide" transparent>
        <View style={{ flex: 1 }}>
          <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />


          <View style={styles.modalContent}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 30,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#B1DDA5",
                  width: 80,
                  height: 8,
                  borderRadius: 8,
                }}
                onPress={() => setModal(false)}
              />
            </View>
            <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 20}}>
              Mais detalhes
            </Text>
            <View style={{flexDirection: "column", gap: 10}}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Energia</Text>
                    <Text>221,15 kcal</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Proteínas</Text>
                    <Text>15,13 g</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Carboidratos</Text>
                    <Text>18,40</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", paddingLeft: 15}}>
                    <Text>Fibra Alimentar</Text>
                    <Text>18,40</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", paddingLeft: 15}}>
                    <Text>Açucar</Text>
                    <Text>18,40</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Gorduras Totais</Text>
                    <Text>221,15 kcal</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", paddingLeft: 15}}>
                    <Text>Gorduras Saturadas</Text>
                    <Text>15,13 g</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", paddingLeft: 15}}>
                    <Text>Gorduras Trans</Text>
                    <Text>18,40</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Colasterol</Text>
                    <Text>18,40</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Sódio</Text>
                    <Text>18,40</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Potássio</Text>
                    <Text>221,15 kcal</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Cálcio</Text>
                    <Text>15,13 g</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Ferro</Text>
                    <Text>18,40</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Magnésio</Text>
                    <Text>18,40</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Vitamina C</Text>
                    <Text>18,40</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Vitamina D</Text>
                    <Text>221,15 kcal</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{color: "#242424", fontWeight: "bold"}}>Vitamina B6</Text>
                    <Text>15,13 g</Text>
                </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D8EED2",
    paddingTop: 40,
    flex: 1,
  },
  image: {
    borderRadius: 70,
    width: 280,
    height: 280,
    resizeMode: "cover",
    position: "absolute",
    top: "-4%",
    left: "19.5%",
  },
  energy: {
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3BAB1E",
    width: "100%",
    paddingVertical: 20,
    color: "#fff",
    textAlign: "center",
    borderRadius: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContent: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "90%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#fff",
    padding: 20,
  },
});
