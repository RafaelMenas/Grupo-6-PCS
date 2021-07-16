import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import { styles } from './style';

type Props = TouchableOpacityProps & {
    title: string
}

export function ButtonIcon({ title, ...rest } : Props){
    return(
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.container}>
            <Text style={styles.title}>
                        { title }
            </Text>
            </View>
        </TouchableOpacity>
    );
}