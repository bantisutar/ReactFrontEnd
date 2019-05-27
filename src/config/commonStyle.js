import {StyleSheet, Platform, Dimensions} from 'react-native';
import Colors from '../assets/colors/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";

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
        borderRadius:Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        margin:10,
        width: wp('18%'),
        height: hp('10%'),
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
    fontSize:RF(2.3)
  }

});