import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './AppStack'

export function Routes(){
    return(
        <NavigationContainer>
            <AuthRoutes/>
        </NavigationContainer>
    );
}
