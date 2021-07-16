import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    
    },
    suggestions:{
        width: '100%',
        height: '25%',
    },
    preferences:{
        marginLeft: 8,
        width: '96%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#C4C4C4',
        borderRadius: 20,
        padding: 20,
        justifyContent: 'space-between',
    },
    preferenceIcons:{
        width: 50,
        height: 50,
    },
    circunference:{
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 35,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#FD9822',
        marginBottom: 10,
    },
    searchText:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        marginTop: 30,
        marginBottom: 20,
    },
    favoritados: {
        marginLeft: 15,
    },
    iconSubjects:{
      alignItems: 'center',  
      justifyContent: 'center',
    },
    cupons:{
        width: '100%',
        height: '25%',
        marginTop: 20,
    },
    box:{
        width: '90%',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20, 
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#C4C4C4',
        borderRadius: 20,
        padding: 5, 
    },
    backImg:{
        position: 'absolute',
        right: 15,
        width: 30,
        height: 15,
    },
    boxIcon:{
        width: 50,
        height: 50,
        marginRight: 5,
        marginLeft: 15, 
    },
    textIcon:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    messages:{
        width: '100%',
        height: '30%',
    },
    conversations:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: -25,
    },
    typeMessages:{
        flexDirection: 'row',
    },
    people:{
        width: '90%',
        marginTop: 20,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#C4C4C4',
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 20,
    },
    randomPeople:{
        width: 80,
        height: 80,
        borderRadius: 40,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10, 
    },
    namePhoto:{
        
    },
    textMessage:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: '#C4C4C4',
        borderWidth: 2,
        borderRadius: 20,
        width: '60%',
        marginLeft: -5,
        paddingLeft: 10,
    },
    

})