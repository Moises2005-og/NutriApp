import { Container } from "@/components/container";
import { focusHealth, focusHealthImages } from "@/utils/mockData";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Home() {

    const [info, setInfo] = useState({})

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
        <Container>
            <View style={{marginTop: 50}}>
                <Text style={{fontSize: 24, fontWeight: "bold"}}>Saúde em foco</Text>
            </View>
            <View>
            <FlatList 
            data={focusHealth} 
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
            <View style={{marginRight: 10}}>
                <Image 
                    source={focusHealthImages[item.image]} 
                    style={{ width: 100, height: 100, marginBottom: 10, borderRadius: 8 }}
                />
                <Text style={{width: 150, padding: 10, lineHeight: 20}}>{item.title}</Text>
                </View>
            )}
            horizontal/>
            </View>
        </Container>
    )
}