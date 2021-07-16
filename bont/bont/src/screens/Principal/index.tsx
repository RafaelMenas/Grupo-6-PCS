import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import artIcon from "../../assets/Landing/artIcon.png";
import musicIcon from "../../assets/Landing/musicIcon.png";
import mathIcon from "../../assets/Landing/mathIcon.png";
import moreIcon from "../../assets/Landing/moreIcon.png";
import cuponIcon from "../../assets/Landing/cuponIcon.png";
import activiesIcon from "../../assets/Landing/activiesIcon.png";
import randomPeople from "../../assets/Landing/randomPeople.png";
import backImg from "../../assets/Landing/backImg.png";
import PageHeader from "../../components/PageHeader";

const Principal = () => {
  
  const { navigate } = useNavigation();

  function handleToMessages(){
    navigate('Messages');
  }
  
  return (
    <View style={styles.container}>
      <PageHeader text="Procure algo para aprender!" />
      <View style={styles.suggestions}>
        <View style={styles.searchText}>
          <TouchableOpacity>
            <Text>Sugestões</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.favoritados}>Favoritados</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.preferences}>
          <View style={styles.iconSubjects}>
            <View style={styles.circunference}>
              <Image
                source={artIcon}
                style={styles.preferenceIcons}
                resizeMode="contain"
              />
            </View>
            <Text>Artes!</Text>
          </View>
          <View style={styles.iconSubjects}>
            <View style={styles.circunference}>
              <Image
                source={musicIcon}
                style={styles.preferenceIcons}
                resizeMode="contain"
              />
            </View>
            <Text>Música!</Text>
          </View>
          <View style={styles.iconSubjects}>
            <View style={styles.circunference}>
              <Image
                source={mathIcon}
                style={styles.preferenceIcons}
                resizeMode="contain"
              />
            </View>
            <Text>Cálculo!</Text>
          </View>
          <View style={styles.iconSubjects}>
            <View style={styles.circunference}>
              <Image
                source={moreIcon}
                style={styles.preferenceIcons}
                resizeMode="contain"
              />
            </View>
            <Text>Outros!</Text>
          </View>
        </View>
      </View>
      <View style={styles.cupons}>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={styles.textIcon}>
              <Image source={cuponIcon} style={styles.boxIcon} />
              <View>
                <Text style={{ fontSize: 16 }}>Veja os seus</Text>
                <Text style={{ fontSize: 23 }}>Cupons!</Text>
              </View>
            </View>
            <Image
              source={backImg}
              style={styles.backImg}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.box}>
            <View style={styles.textIcon}>
              <Image source={activiesIcon} style={styles.boxIcon} />
              <View>
                <Text style={{ fontSize: 16 }}>Veja as suas</Text>
                <Text style={{ fontSize: 23 }}>Atividades!</Text>
              </View>
            </View>
            <Image
              source={backImg}
              style={styles.backImg}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.messages}>
        <View style={styles.conversations}>
          <Text style={{fontSize:15}}>Conversas anteriores</Text>
          <View style={styles.typeMessages}>
            <TouchableOpacity>
              <Text style={{marginRight:20, fontSize:15}}>Todas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontSize:15}}>Filtragem</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.people} onPress={() => handleToMessages()} >
          <View style={styles.namePhoto}>
            <Image source={randomPeople} style={styles.randomPeople} resizeMode='contain'></Image>
            <Text>Marcelo Benendes</Text>
          </View>
          <View style={styles.textMessage}>
            <Text style={{marginRight: 20}}>Pode ser na sexta?</Text>
            <Text>(16:17)</Text>
          </View>
          <Image source={backImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Principal;
