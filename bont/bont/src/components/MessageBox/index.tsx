import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

import randomPeople from "../../assets/Landing/randomPeople.png";
import backImg from "../../assets/Landing/backImg.png";



const MessageBox = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
            <View style={styles.box}>
                <View style={styles.randomPeople} >
                    <Image source={randomPeople} style={styles.randomImg} />
                    <Text style={{fontSize:10}}>Marcelo Benendes</Text>
                </View>
                <View style={styles.message}>
                    <Text style={{marginRight:35}}>Você pode na sexta?</Text>
                    <Text>(16:40)</Text>
                </View>
                <Image source={backImg} style={styles.backIcon}/>
            </View>
            </TouchableOpacity>
        </View>
    )
};

export default MessageBox;