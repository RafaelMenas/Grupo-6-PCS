import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    TextInput,
    Image,
    StatusBar,
    ImageBackground,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

import { styles } from './styles'
import PageHeader from '../../components/PageHeader';


export function Gps(){
    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
      'Estamos pegando sua localização...'
    );

    useEffect(() => {
        CheckIfLocationEnabled();
    }, []);

    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
            Alert.alert(
            'Localização do celular não ativada',
            'Por favor, ative a localização para continuar',
            [{ text: 'OK' }],
            { cancelable: false }
            );
        } else {
            setLocationServiceEnabled(enabled);
        }
    };

    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
      }, []);
      
      // create the handler method
      
      const GetCurrentLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
      
        if (status !== 'granted') {
          Alert.alert(
            'Permission not granted',
            'Allow the app to use location service.',
            [{ text: 'OK' }],
            { cancelable: false }
          );
        }
      
        let { coords } = await Location.getCurrentPositionAsync();
      
        if (coords) {
          const { latitude, longitude } = coords;
          let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude
          });
      
          for (let item of response) {
            let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
      
            setDisplayCurrentAddress(address);
          }
        }
    };

    return(
        <View style={styles.container}>
          <PageHeader text={"Procurar professores próximos a você"}/>
            <View style={styles.local}>
                <Text>Procurar perto de você em: {displayCurrentAddress}</Text>
            </View>
        </View>
    );
}