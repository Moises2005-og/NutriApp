import { foodImages } from "@/utils/mockData";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FoodDetails() {
    const route = useRoute()
    const navigation = useNavigation<any>()
    const [activeButton, setActiveButton] = useState<boolean>(false)
    const {title, grams, image, protein}: any = route.params

    console.log(title)

    return(
        <>
           <View style={styles.container}>
               <View>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 30, alignItems: "center", width: "100%", paddingHorizontal: 5, paddingVertical: 5}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image source={require("../../assets/images/Back button.png")} style={{width: 60}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveButton(!activeButton)}>
                    <Image
                        source={
                        activeButton
                            ? require("../../assets/images/buttonActive.png")
                            : require("../../assets/images/Love button.png")
                        }
                        resizeMode="contain"
                        style={{width: 65, borderRadius: 100}}
                    />
                    </TouchableOpacity>
                </View>
               <View style={{backgroundColor: "#fff", borderTopRightRadius: 40, borderTopLeftRadius: 40,height: "100%", padding: 25}}>
                    <Image source={foodImages[image]} style={styles.image}/>
                    <View style={{marginTop: "70%"}}>
                        <Text style={{textAlign: "center", fontSize: 24, fontWeight: "bold", marginBottom: 10}}>{title}</Text>
                        <View style={{flexDirection: "row", justifyContent: "center", gap: 30}}>
                            <View>
                                <Text style={styles.energy}>Energia</Text>
                                <Text style={styles.energy}>221,15 kcal</Text>
                            </View>
                            <View>                                
                                <Text style={styles.energy}>Porcão</Text>
                                <Text style={styles.energy}>240 grams</Text>
                            </View>
                        </View>
                    </View>
               </View>
               </View>
           </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D8EED2",
        paddingTop: 40,
    },
    image: {
        borderRadius: 70,
        width: 280,
        height: 280,
        objectFit: "cover",
        position: "absolute",
        top: "-4%",
        left: "19.5%"
    },
    energy: {
        textAlign: "center",
        marginBottom: 10
    }
})