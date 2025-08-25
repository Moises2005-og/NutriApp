import { ReactNode } from "react";
import { View } from "react-native";

type ContainerProps = {
    children: ReactNode
}

export function Container({children}: ContainerProps) {
    return(
        <View style={{padding: 30, justifyContent: "center", flexDirection: "column"}}>
            {children}
        </View>
    )
}