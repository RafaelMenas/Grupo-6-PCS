import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MessageBox from "../../components/MessageBox";
import PageHeader from "../../components/PageHeader";
import { styles } from "./styles";

const Messages = () => {
  return (
    <View style={styles.container}>
      <PageHeader text="Procure ou comece uma nova conversa!" />
      <View>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.filterText}>Filtro</Text>
        </TouchableOpacity>
        <View style={styles.messages}>
          <ScrollView>
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Messages;
