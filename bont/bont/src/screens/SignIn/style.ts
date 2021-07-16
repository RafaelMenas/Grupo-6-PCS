import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1,
        height: 200,
        width: 250,
    },
    container3: {
        flexDirection: "column",
        flex: 1
    },
    container4: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 60,
        marginTop: 450,
        flex: 1
    },
    container5: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 60,
        marginTop: -100,
        flex: 1
    },
    orange_image: {
        position: 'absolute',
        width: '100%',
        height: '80%',
        flex: 1,
        top: 0
    },
    prof_image: {
        position: 'absolute',
        top: 0,
        resizeMode: 'stretch',
        flex: 1
    },
    white_image: {
        resizeMode: 'stretch',
        flex: 1,
        bottom: 0
    },
    chapeu_image: {
        marginTop: -91,
        marginLeft: 20,
    },
    title: {
        marginTop: 55,
        marginBottom: 15,
        marginLeft: 25,
        fontSize: 60,
        color: theme.colors.heading
    },
    subtitle: {
        marginLeft: 26,
        marginTop: 25,
        fontSize: 13,
        color: theme.colors.heading
    }
});