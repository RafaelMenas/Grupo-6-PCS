import { theme } from './../../global/styles/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

    },
    user: {
        flexDirection: 'row'
    },
    greeting: {
        fontSize: 24,
        color: theme.colors.textProfile,
        marginRight: 6
    },
    username: {
        fontSize: 24,
        color: theme.colors.textProfile
    },
    message: {
        
    }
});