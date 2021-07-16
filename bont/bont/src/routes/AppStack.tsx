import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "./Feed";
import { SignIn } from "../screens/SignIn";
import { SignIn3 } from "../screens/SignIn3";
import { SignInAluno } from "../screens/SignInAluno";
import { SignInProfessor } from "../screens/SignInProfessor";
import { Gps } from "../screens/Gps";
import { LogIn } from "../screens/LogIn";
import { LogIn1 } from "../screens/Login1";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none" //exclui cabecalho padrao do Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignIn3" component={SignIn3} />
      <Screen name="Aluno" component={SignInAluno} />
      <Screen name="Professor" component={SignInProfessor} />
      <Screen name="LogIn" component={LogIn} />
      <Screen name="LogIn1" component={LogIn1} />
      <Screen name="Feed" component={Feed} />
    </Navigator>
  );
}
