import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../LogIn/styles'
import { useNavigation } from '@react-navigation/native';

export function LogIn1(){
    const navigation = useNavigation();

    function handleLogIn(){
        navigation.navigate('SignIn3');
    }

    return(
        <><View style={styles.container}>
            <View style={styles.welcoming}>
                <Text style={styles.title1}>Junte-se à nossa comunidade!</Text>
                <Text style={styles.title1}>Crie sua conta</Text>
            </View>
        </View>
        <View style={styles.inputData1}>
            <View style={styles.dataEntries1}>
                <TextInput style={styles.data} placeholder="Email" autoCorrect={false} />
                <View style={styles.lines} />
            </View>
            <View style={styles.dataEntries1}>
                <TextInput style={styles.data} placeholder="Senha" autoCorrect={false} />
                <View style={styles.lines} />
            </View>
            <View style={styles.dataEntries1}>
                <TextInput style={styles.data} placeholder="Confirmar senha" autoCorrect={false} />
                <View style={styles.lines} />
            </View>
        </View>
        <View style={styles.registration}>
            <LinearGradient style={styles.gradient} colors={['#F28C28', '#F4BB44', '#FFDEAD']}>
                <TouchableOpacity onPress={handleLogIn} style={styles.buttons} activeOpacity={0.3}>
                    <Text style={styles.text}>Começar</Text>
                </TouchableOpacity>
            </LinearGradient>
            <Text style={styles.help}>ou</Text>
            <LinearGradient style={styles.gradient} colors={['#F28C28', '#F4BB44', '#FFDEAD']}>
                <TouchableOpacity style={styles.buttons} activeOpacity={0.3}>
                    <Text style={styles.text}>Conectar ao LinkedIn</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
        <View style={styles.bottom}>
            <Text style={styles.help}>Você receberá um email de confirmação após envio dos</Text>
            <Text style={styles.note}>dados</Text>
        </View></>
    )
}