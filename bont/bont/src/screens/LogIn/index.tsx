import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

export function LogIn(){
    const navigation = useNavigation();

    function handleFeed(){
        navigation.navigate('Feed');
    }
    function handleLogIn(){
        navigation.navigate('LogIn1');
    }
    
    return(
        <><View style={styles.container}>
            <View style={styles.welcoming}>
                <Text style={styles.title}>Bem vindo ao</Text>
                <Text style={styles.title}>Bont!</Text>
            </View>
        </View>
        <View style={styles.inputData}>
            <View style={styles.dataEntries}>
                <TextInput style={styles.data} placeholder="Email" autoCorrect={false} />
                <View style={styles.lines} />
            </View>
            <View style={styles.dataEntries}>
                <TextInput style={styles.data} placeholder="Senha" autoCorrect={false} />
                <View style={styles.lines} />
            </View>
        </View>
        <View style={styles.login}>
            <LinearGradient style={styles.gradient} colors={['#FFDEAD', '#F4BB44', '#F28C28']}>
                <TouchableOpacity onPress={handleFeed} style={styles.buttons} activeOpacity={0.3}>
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>
            </LinearGradient>
            <View style={{marginTop: 10}}/>
            <TouchableOpacity>
                <Text style={styles.help}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity onPress={handleLogIn}>
                <Text style={styles.help}>Não tem uma conta? Registre-se aqui!</Text>
            </TouchableOpacity>
        </View></>
    )
}