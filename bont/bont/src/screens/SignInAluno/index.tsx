import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';


export function SignInAluno(){
    const navigation = useNavigation();

    function handleFeed(){
        navigation.navigate('Feed');
    }

    return(
        <View style={styles.container1}>
            <View style={styles.container1}>
                <Text style={styles.titulo}>
                    Aluno!
                </Text>
            </View>
            <View style={styles.container2}>   
                <TextInput 
                placeholder='Áreas de interesse (Física; Matemática; Fotografia; Artes; Idiomas...)' 
                multiline={true}
                textAlign = 'center'
                style={styles.receberDadosGrande}/>
                <TextInput 
                placeholder='Fale um pouco mais sobre voçê!'
                textAlign = 'center'             
                style={styles.receberDadosGrande}/>
                <TextInput placeholder='Necessidades especiais?' style={styles.receberDados}/>
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