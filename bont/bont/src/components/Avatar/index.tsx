import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import img_perfil from '../../assets/Perfil.png'

export function Avatar(){
    return(
        <View style={styles.container}>
            <Image
                source={img_perfil}
                style={styles.avatar}
            />
        </View>
    );
};