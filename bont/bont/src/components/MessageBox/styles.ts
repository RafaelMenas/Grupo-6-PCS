import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        alignItems:'center',
        marginBottom: 5,
    },
    box:{
        flexDirection: 'row',
        alignItems:'center',
        borderColor: 'grey',
        borderStyle: "solid",
        borderWidth: 1,
    },
    randomPeople:{
        justifyContent:'center',
        alignItems:'center',
        margin: 10,
    },
    randomImg:{
        width: 60,
        height: 60,
        borderRadius: 35,
    },
    message:{
        flexDirection: 'row',
        width: '60%',
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: "solid",
        height: '40%',
        borderRadius: 10,
        padding: 5,


    },
    backIcon:{
        marginRight: 10,
        marginLeft: 20,
    }
})