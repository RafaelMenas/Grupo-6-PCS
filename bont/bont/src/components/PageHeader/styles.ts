import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
header: {
    width: '100%',
    height: '20%',
    justifyContent:'center',

},
icons:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45,
    marginLeft: 20,
},
iconPerfil:{
    width: 50,
    height: 50,
},
rightIcons:{
    flexDirection: 'row',
    alignItems: 'center',
    position:'absolute',
    right: 60,
    width: 30,
},
iconBell:{
    width: 20,
    height: 20,
},
iconMessage:{
    width: 30,
    height: 30,
    marginLeft: 15,
},
inputSearch:{
    backgroundColor: 'white',
    width: '90%',
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
},
inputLupa:{
    flexDirection: 'row',
    alignItems: 'center',
},
lupa:{
    marginRight: 10,
    marginLeft: 10,
},
})