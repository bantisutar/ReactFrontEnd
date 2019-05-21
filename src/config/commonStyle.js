import {StyleSheet, Platform} from 'react-native';
import Colors from '../assets/colors/colors';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    menuItem:{
        padding: 10,
        //borderWidth: 0.5,
        borderColor: '#d6d7da',
        flex:1,
        flexDirection: 'row'
    },
    childcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding:10,
    },
    menuImage: {
        borderRadius:50,
        marginBottom:10,
        width:60,
        height:60
    },
    profiletext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:16,
        textAlign: 'center',
        alignSelf : 'center'
    },
     profiletext1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:11
    },
    drawerImage: {
        height: 60,
        width: 60,
        borderRadius: 120
      },
        iconimage: {
    width:30,
    height:30,
    marginRight:15
  },
  menuText: {
    marginTop:5,
    fontSize:14
  }

});