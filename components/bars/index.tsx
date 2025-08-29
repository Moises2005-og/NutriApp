import { StyleSheet, Text, View } from "react-native";

type BarsProps = {
    title: string,
    protein: number,
    qtd: boolean[]
}

export function Bars({title, protein, qtd}: BarsProps) {
    return(
        <>
            <View>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                    <Text>{title}</Text>
                    <Text>{protein}</Text>
                </View>
                <View style={{flexDirection: "row", gap: "2%", width: "100%"}}>
                    {
                        qtd.map((item: any) => (
                            <View style={item ? styles.activeBar:styles.Bar}></View>
                        ))
                    }
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    activeBar: {
        backgroundColor: "#3BAB1E",
        width: 55,
        height: 10,
        borderRadius: 10
    },
    Bar: {
        backgroundColor: "#B1DDA5",
        width: 55,
        height: 10,
        borderRadius: 10
    }
})