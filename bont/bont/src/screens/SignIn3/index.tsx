import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { ButtonIcon } from '../../components/ButtonIcon';


export function SignIn3(){
    const navigation = useNavigation();

    function handleAluno(){
        navigation.navigate('Aluno');
    }
    function handleProfessor(){
        navigation.navigate('Professor');
    }

    return(
        <View style={styles.container1}>
            <View style={styles.container1}>
                <Text style={styles.titulo}>
                    Estamos quase acabando!
                </Text>
            </View>
            <View style={styles.container2}>
                <TextInput 
                placeholder='CPF' 
                keyboardType = 'numeric'
                style={styles.receberDados}/>
                <TextInput 
                placeholder='Data de nascimento (dd/mm/aaaa)' 
                style={styles.receberDados}/>
                <TextInput placeholder='Gênero' style={styles.receberDados}/>
                <TextInput placeholder='Endereço' style={styles.receberDados}/>
            </View>
            <View style={styles.container3}> 
                <ButtonIcon 
                    title="Sou Aluno!"
                    onPress={handleAluno}
                    />
            </View>
            <View style={styles.container4}>
                <ButtonIcon 
                    title="Sou Professor!"
                    onPress={handleProfessor}
                    />
            </View>
        </View>
    )
}