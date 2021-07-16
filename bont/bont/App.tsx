import React, {Fragment} from 'react';
import { useFonts } from 'expo-font';
import { Inter_300Light } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';

import { SignIn } from './src/screens/SignIn';
import { SignIn3 } from './src/screens/SignIn3';
import { Feed } from './src/screens/Feed';
import { Routes } from './src/routes';


export default function App(){
    const [fontsLoaded] = useFonts({
        Inter_300Light
    });

    // enquanto as fontes nao sao carregadas
    if (!fontsLoaded){
        return <AppLoading/>
    }

    return(
        <>
            <StatusBar
                barStyle = "dark-content"
                backgroundColor = "transparent"
                translucent
            />
            <Routes />

        </>
    );
}