import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { ReactNode, useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../header";

type ContainerProps = {
    children: ReactNode
}


export function Container({children}: ContainerProps) {

    const navigation = useNavigation<any>()

    useEffect(() => {
        const auth = async () => {
            const userAuth = await AsyncStorage.getItem("user")
            if (!userAuth) {
                navigation.navigate("Login")
            }
        }

        auth()
    }, [navigation])

    return(
        <SafeAreaView style={{paddingTop: 10, padding: 30, justifyContent: "center", flexDirection: "column"}}>
            {
                <View>
                    <Header/>
                    {children}
                </View>
            }
        </SafeAreaView>
    )
}