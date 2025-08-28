import { useNavigation } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function Card({title, protein, grams, image, data}: any) {

    const navigation = useNavigation<any>()

    return(
        <>
            <TouchableOpacity style={{flexDirection: "row", gap: 10, marginBottom: 10, marginTop: 20}} onPress={() => navigation.navigate("Food-Details", data)}>
                <Image source={image} style={{width: 60, height: 60, borderRadius: 8}}/>
                <View style={{flexDirection: "column", gap: 5}}>
                    <Text style={{fontSize: 16, fontWeight: "semibold"}}>{title} </Text>
                    <Text style={{color: "#8A8A8A", fontSize: 14}}>{protein} g de proteinas, {grams} carboidratos</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}