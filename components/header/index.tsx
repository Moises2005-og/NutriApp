import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";



export function Header() {
    const [info, setInfo] = useState<any>({})

    useEffect(() => {
        async function checkData() {
            const dados = await AsyncStorage.getItem("user")
            if(dados) {
                const dadosConvert = JSON.parse(dados)
                setInfo(dadosConvert)
                console.log(dadosConvert)
            }
        }
        checkData()
    }, [])


    return(
        <>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <View style={{flexDirection: "row", gap: 20, alignItems: "center"}}>
                    <Image source={require("../../assets/images/../../assets/images/perfil.png")}/>
                    <View >
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>Olá {info?.name}!</Text>
                        <Text style={{color: "#8A8A8A", fontSize: 14}}>Boas Vindas de volta</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
                    <TouchableOpacity>
                        <Image source={require("../../assets/images/search.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../../assets/images/sign-out.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}