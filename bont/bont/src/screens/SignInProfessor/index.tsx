import React, { useState } from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import Unmarked from '../../assets/Principal/Unmarked.png';
import Marked from '../../assets/Principal/Marked.png';



export function SignInProfessor(){
    const navigation = useNavigation();
    function handleFeed(){
        navigation.navigate('Feed');
    }

    const [Check, useCheck] = useState(Unmarked);

    function ChangeCheck(){
        if (Check == Unmarked){
            useCheck(Marked);
        }
        if (Check == Marked){
            useCheck(Unmarked);
        }
    }


    return(
        <View style={styles.container1}>
            <View style={styles.container1}>
                <Text style={styles.titulo}>
                    Professor!
                </Text>
            </View>
            <View style={styles.container2}>
                <TextInput placeholder='Área de atuação' style={styles.receberDados}/>
                <TextInput 
                placeholder='Formação acadêmica' 
                multiline={true}
                textAlign='center'
                style={styles.receberDadosGrande}/>
                <TextInput 
                placeholder='Faça uma breve descrição para que saibam de você' 
                multiline={true}
                textAlign='center'
                style={styles.receberDadosGrande}/>
            </View>
            <View style={styles.container4}> 
            <Text style={styles.Pergunta}>
                Tem interesse em {'\n'}
                ministrar aulas presenciais?
                </Text>
                <TouchableOpacity onPress={ChangeCheck}>
                <Image source={Check}/>
                </TouchableOpacity>             
            </View>
            <View style={styles.container3}>
                <ButtonIcon 
                    title="Começar!"
                    onPress={handleFeed}
                    />
            </View>
        </View>
    )
}