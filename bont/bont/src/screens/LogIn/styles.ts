import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 3,
    },
    welcoming: {
      flex: 3,
      alignItems: 'center',
      marginTop: 60,
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
    },
    title1: {
      fontSize: 26,
      fontWeight: 'bold',
    },
    inputData: {
      flex: 3,
      marginHorizontal: '18%',
    },
    inputData1: {
      flex: 3,
      marginTop: -140,
      marginHorizontal: '18%',
    },
    dataEntries: {
      marginTop: 0,
      paddingTop: '22%',
    },
    dataEntries1: {
      marginTop: 0,
      paddingTop: '15%',
    },
    data: {
      fontSize: 18,
    },
    lines: {
      borderBottomWidth: 2,
      borderColor: '#A8A8A8',
    },
    buttons: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 275,
      height: 60,
      borderRadius: 30,
    },
    gradient: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -10,
      width: 275,
      height: 60,
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.20,
      shadowRadius: 8,
      elevation: 10,
    },
    login: {
      flex: 2,
      alignItems: 'center',
    },
    registration: {
      flex: 2,
      alignItems: 'center',
      marginTop: -70,
    },
    help: {
      color: '#A8A8A8',
      fontSize: 14,
      paddingVertical: 14,
      marginBottom: 8,
    },
    note: {
      color: '#A8A8A8',
      fontSize: 14,
      marginTop: '-4%',
    },
    text: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },
    bottom: {
      flex: 1,
      alignItems: 'center',
    }
});