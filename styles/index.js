import {StyleSheet} from "react-native";

export const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "#F5FCFF",
            flex: 1
        },
        header: {
            backgroundColor: "#9bf442",
            height: 40,
            flexDirection: "row",
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        body: {
            marginTop: 10,
            flexDirection: "column",
            paddingHorizontal: 5
        },
        headerTextStyle: {
            fontSize: 20,
            color: "white",
            fontFamily: 'berkshireswash-regular'
        },
        bodyTextStyle: {
            fontSize: 15,
            color: "black",
            fontFamily: 'Merienda-Regular'
        },
        button: {
            backgroundColor: '#4bb7ac',
            height: 40,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 30,
        },
        titleButton: {
            backgroundColor: '#4bb7ac',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginTop: 10
        },
    }
);
