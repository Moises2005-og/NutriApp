import { StyleSheet, Text, View } from "react-native";

type BarsProps = {
    title: string,
    protein: number,
    qtd: boolean[]
}

export function Bars({title, protein, qtd}: any) {
    return(
        <>
            <View>
                <View>
                    <Text>{title}</Text>
                    <Text>{protein}</Text>
                </View>
                {
                    qtd.map((item: any) => (
                        <View style={styles.activeBar}></View>
                    ))
                }
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
        width: 42,
        height: 8
    },
    Bar: {
        backgroundColor: "#B1DDA5",
        width: 42,
        height: 8
    }
})