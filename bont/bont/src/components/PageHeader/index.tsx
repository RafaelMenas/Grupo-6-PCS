import React from 'react';
import { View, Image, TextInput } from 'react-native';
import { styles } from "./styles";

import perfil from "../../assets/Landing/perfilIcon.png";
import notification from "../../assets/Landing/notificationIcon.png";
import message from "../../assets/Landing/messageIcon.png";
import lupaIcon from "../../assets/Landing/lupaIcon.png";

export interface IText {
    text: string,
}

const PageHeader: React.FC<IText> = ({text}) => {
    return(
        <View style={styles.header}>
        <View style={styles.icons}>
          <Image
            source={perfil}
            style={styles.iconPerfil}
            resizeMode="contain"
          />
          <View style={styles.rightIcons}>
            <Image
              source={notification}
              style={styles.iconBell}
              resizeMode="contain"
            />
            <Image
              source={message}
              style={styles.iconMessage}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.inputSearch}>
          <View style={styles.inputLupa}>
            <Image source={lupaIcon} style={styles.lupa} />
            <TextInput placeholder={text}></TextInput>
          </View>
        </View>
      </View>
    )
}

export default PageHeader;