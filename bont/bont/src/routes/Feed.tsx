import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Gps } from "../screens/Gps";

import Principal from "../screens/Principal";
import Messages from "../screens/messages";

const { Navigator, Screen} = createBottomTabNavigator();

function Feed() {
  return (
      <Navigator tabBarOptions={{
            style: {
            elevation:0,
            shadowOpacity:0, 
            height:50,
            },
            tabStyle: {
                flexDirection: 'row',
                alignItems:'center',
                justifyContent: 'center',
            },
            iconStyle:{
                flex: 0,
                width: 20,
                height: 20,
            },
            inactiveBackgroundColor:'#fafafc',
            activeBackgroundColor: '#ebebf5',
            inactiveTintColor: '#c1bccc',
            activeTintColor: '#32264d',
        }}>
        <Screen name="Principal" component={Principal} options={{
            tabBarLabel:'Home',
            tabBarIcon: () =>{
                return (
                    <AntDesign name="home" />
                )
            }
        }} />
        <Screen name="Messages" component={Messages} options={{
            tabBarLabel:'Message',
            tabBarIcon: () =>{
                return (
                    <AntDesign name="wechat" />
                )
            }
        }} />
        <Screen name="Busca" component={Gps} options={{
            tabBarLabel:'Buscar',
            tabBarIcon: () =>{
                return (
                    <Ionicons name="ios-search" />
                )
            }
        }} />
      </Navigator>
  );
}

export default Feed;
