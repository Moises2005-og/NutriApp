import { ReactNode } from "react";
import { View } from "react-native";
import { Header } from "../header";

type ContainerProps = {
    children: ReactNode
}

export function Container({children}: ContainerProps) {
    return(
        <View style={{paddingTop: 40, padding: 30, justifyContent: "center", flexDirection: "column"}}>
            {
                <View>
                    <Header/>
                    {children}
                </View>
            }
        </View>
    )
}