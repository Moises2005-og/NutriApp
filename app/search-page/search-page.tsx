import { Card } from "@/components/card";
import { foodImages, foods } from "@/utils/mockData";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchPage() {

    const [text, setText] = useState("")
    const navigation = useNavigation<any>()
    const filteredFood = foods.filter((item: any) => item.title.toLowerCase().includes(text.toLowerCase()))

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center", gap: "17%", paddingTop: 25, paddingHorizontal: 15, }}>        
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../../assets/images/Back button.png")}/>
                </TouchableOpacity>        
                <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold", paddingBottom: 20}}>Buscar Receitas</Text>
            </View>
            <View style={{backgroundColor: "#fff", height: "100%", padding: 20, borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: 10}}>
                <View style={{flexDirection: "row", gap: 15, alignItems: "center", justifyContent: "center"}}>
                    <View style={styles.input}>
                        <Image source={require("../../assets/images/search.png")}/>
                        <TextInput placeholder="Salada" style={{width: "100%"}} value={text} onChangeText={(text: string) => setText(text)}/>
                    </View>
                    <View  style={{backgroundColor: "#3BAB1E", padding: 12, borderRadius: 8}}>
                        <TouchableOpacity>
                            <Image source={require("../../assets/images/filter.png")}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView
                style={{ flex: 1, paddingLeft: 10 }}
                contentContainerStyle={{ paddingBottom: 24 }}
                showsVerticalScrollIndicator
                >
                {filteredFood.map((item: any, index: number) => (
                    <Card
                    key={index}
                    title={item.title}
                    protein={item.protein}
                    grams={item.grams}
                    image={foodImages[item.image]}
                    data={item}
                    />
                ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D8EED2",
        flex: 1,
    },
    input: {
        flexDirection: "row",
        gap: 8,
        borderColor: "#3BAB1E",
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        width: "80%"
    }
});
