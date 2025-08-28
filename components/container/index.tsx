import { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../header";

type ContainerProps = {
    children: ReactNode
}

export function Container({children}: ContainerProps) {
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