import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { focusHealth, focusHealthImages, foodImages, foods } from "@/utils/mockData";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Home() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function checkData() {
      const dados = await AsyncStorage.getItem("user");
      if (dados) setInfo(JSON.parse(dados));
    }
    checkData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexShrink: 0 }}>
        <Container>
          <View style={{ marginTop: 25 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 25 }}>
              Saúde em foco
            </Text>
          </View>

          <FlatList
            data={focusHealth}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <Image
                  source={focusHealthImages[item.image]}
                  style={{ width: 151, height: 136, marginBottom: 10, borderRadius: 8 }}
                />
                <View style={{ flexDirection: "row", gap: 10 }}>
                  {item.tags.map((tag: string, idx: number) => (
                    <Text
                      key={idx}
                      style={{
                        paddingHorizontal: 10,
                        borderColor: "#D8EED2",
                        borderWidth: 2,
                        borderRadius: 4,
                        paddingVertical: 4,
                      }}
                    >
                      {tag}
                    </Text>
                  ))}
                </View>
                <Text style={{ width: 200, padding: 10, lineHeight: 20, color: "#242424", fontSize: 15 }}>
                  {item.title}
                </Text>
                <Text style={{ padding: 10 }}>{item.min} min</Text>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Container>
      </View>

      <View style={{ backgroundColor: "#dfdcdcff", paddingHorizontal: 40, flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", paddingTop: 40 }}>
          Tabela Nutricional
        </Text>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator
        >
          {foods.map((item: any, index: number) => (
            <Card
              key={index}
              title={item.title}
              protein={item.protein}
              grams={item.grams}
              image={foodImages[item.image]}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
