import { forHorizontalIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container1:{
        flex: 1,
    },
    container2:{
        flex: 1,
        marginTop: -100,
        alignItems: 'center',
    },
    container3:{
        alignItems: 'center',
        marginTop: 50,
        paddingHorizontal: 60,
        flex: 1
    },
    container4:{
        justifyContent: 'center',
        marginTop: 200,
        flexDirection: 'row',

    },
    titulo:{
        marginTop: 35,
        marginLeft: 24,
        fontSize: 26,
    },
    Pergunta:{
        fontSize: 16,
    },
    receberDados:{
        marginTop: 25,
        height: 26,
        width: 267,
        marginBottom: 10,
        borderBottomWidth: 2,
    },
    receberDadosGrande:{
        marginTop: 25,
        height: 110,
        width: 267,
        borderWidth: 2,
    },
    scrollView:{


    }
})