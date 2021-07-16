import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile(){
    return(
        <View style={styles.container}>
            <Avatar/> 
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        Menas
                    </Text>
                </View>
            </View>
        </View>
    );
};