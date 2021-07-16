import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//importacao de imagens
import vetor_laranja from "../../assets/bglh_laranja.png";
import img_prof from "../../assets/img_prof.png";
import vetor_branco from "../../assets/bglh_branco.png";
import chapeu from "../../assets/chapeuzinho.png";

import { styles } from "./style";

import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  const navigation = useNavigation();

  function handleLogIn() {
    navigation.navigate("LogIn");
  }

  function handleSignIn() {
    navigation.navigate("LogIn1");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={vetor_laranja}
        resizeMode="stretch"
        style={styles.orange_image}
      >
        <View style={styles.container3}>
          <View style={styles.container2}>
            <Image
              source={img_prof}
              resizeMode="contain"
              style={styles.prof_image}
            />
            <Text style={styles.title}>Bont</Text>
            <Image
              source={chapeu}
              resizeMode="contain"
              style={styles.chapeu_image}
            />
            <Text style={styles.subtitle}>Conectando cérebros</Text>
          </View>
          <View style={styles.container2}>
            <Image
              source={vetor_branco}
              resizeMode="contain"
              style={styles.white_image}
            />
          </View>
          <View style={{ flex: 1, backgroundColor: "white" }} />
        </View>
      </ImageBackground>

      <View style={styles.container4}>
        <ButtonIcon title="Já tenho uma conta" onPress={handleLogIn} />
      </View>
      <View style={styles.container5}>
        <ButtonIcon title="Quero me cadastrar!" onPress={handleSignIn} />
      </View>
    </View>
  );
}
