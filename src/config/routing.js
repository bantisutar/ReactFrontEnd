
import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import { DrawerActions, DrawerItems } from 'react-navigation';
import { View, TextInput, ActivityIndicator } from 'react-native';
import Home from '../screens/home';
import Login from '../screens/login';
//import Colors from '../assets/colors/colors';
import DrawerScreen from '../components/drawerScreen';
// import {storeData,retriveData} from './storage';
import AuthLoading from '../screens/authloading';
import AppIntro from '../screens/appintro';
import Icon from 'react-native-ionicons';
import Dimensions from 'Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors/colors';
import Profile from '../screens/profile';
import Cart from '../screens/cart';
import Information from '../screens/information';
import ViewAll from '../screens/viewall';
import Scanner from '../screens/scanner';
import WheatherDetail from '../screens/whether';
const DEVICE_WIDTH = Dimensions.get('window').width;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      
      headerLeft:
      
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Icon style={{ paddingLeft: 10, color: 'white' }}
            name='md-menu' navigation
            onPress={() => navigation.openDrawer()}
            size={25} />
          {/*  <Image style={{height:30 , width: 30 , marginLeft : 15, marginRight : 15}}source={require('../assets/icons/logo.png')}/> */}
          <TextInput
            style={{
              backgroundColor: 'white',
              width: DEVICE_WIDTH - 110,
              height: 35,
              marginHorizontal: 20,
              paddingLeft: 45,
              borderRadius: 20,
              color: '#ffffff',
            }}
            placeholder="Search Here..."

            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
        </View>,
      headerRight:
        <Icon style={{ paddingRight: 10, color: 'white' }}
          name='md-cart' navigation
          onPress={() => navigation.openDrawer()}
          size={25} />

    })
  },
  ViewAll: {
    screen: ViewAll,
    navigationOptions: ({ navigation }) => ({
      title: "ViewAll Page",
    })
  },
 
 
},
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: colors.primary,
        showdownOpacity: 0,
        elevation: 0
      },
      //Title:"Home",
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  })


const ProfileStack = createStackNavigator({
  Profile: {
    screen: Scanner,
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
     title:"Profile",
      headerRight:
        <Icon style={{ paddingRight: 10, color: 'white' }}
          name='md-person-add' navigation
          onPress={() => navigation.openDrawer()}
          size={25} />
    })
  },
  login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: "Login Page",
    })
  }
},
  {
    initialRouteName: 'Profile',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#e40046',
        showdownOpacity: 0,
        elevation: 0
      },
      //Title:"Home",
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  })
  const CartStack = createStackNavigator({
    Cart: {
      screen: Cart,
      headerMode: 'float',
      navigationOptions: ({ navigation }) => ({
       title:"Cart Page",
      
        headerRight:
          <Icon style={{ paddingRight: 10, color: 'white' }}
            name='md-person-add' navigation
            onPress={() => navigation.openDrawer()}
            size={25} />
      })
    },
   
  },
    {
      initialRouteName: 'Cart',
      /* The header config from HomeScreen is now here */
      defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#e40046',
          showdownOpacity: 0,
          elevation: 0
        },
        //Title:"Home",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }),
    })
    const InfoStack = createStackNavigator({
      Info: {
        screen: Information,
        headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      
      headerLeft:
      
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Icon style={{ paddingLeft: 10, color: 'white' }}
            name='md-menu' navigation
            onPress={() => navigation.openDrawer()}
            size={25} />
          {/*  <Image style={{height:30 , width: 30 , marginLeft : 15, marginRight : 15}}source={require('../assets/icons/logo.png')}/> */}
          
        </View>,
      headerRight:
        <Icon style={{ paddingRight: 10, color: 'white' }}
          name='md-cart' navigation
          onPress={() => navigation.openDrawer()}
          size={25} />

    })
      },
      WheatherDetail: {
        screen: WheatherDetail,
        navigationOptions: ({ navigation }) => ({
          title: "Wheather Detail Page",
        })
      }
    },
      {
        initialRouteName: 'Info',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: ({ navigation }) => ({
        
          headerStyle: {
            backgroundColor: 'rgba(42, 41, 137, 1)',
            showdownOpacity: 0,
            elevation: 0
          },
          //Title:"Home",
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }),
      })
      InfoStack.navigationOptions = ({ navigation }) => {
        let tabBarVisible = false;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
      
        return {
          tabBarVisible,
        };
      };
    
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
    Home1: HomeStack,
    Wheather: InfoStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          //IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Profile') {
          iconName = `ios-options`;
        }
        else if (routeName === 'Home1') {
          iconName = `ios-construct`;
        }
        else if (routeName === 'Wheather') {
          iconName = `ios-pulse`;
          tabBarVisible = false;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor:'white',
      inactiveTintColor: colors.primaryDark,
      showLabel: false,
      style:{
        shadowColor: 'rgba(58,55,55,0.1)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 3,
        borderTopColor: 'transparent',
        backgroundColor:colors.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: hp('7%')
      },
      activeTabStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 4,
        borderColor: '#6C1D7C'
      }
    },
  }
);

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TabNavigator,
     navigationOptions: {
      drawerLabel: "Home"
     }
  },
  Cart: {
    screen: Cart,
  },
  
},
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    //contentComponent: CustomDrawerContentComponent,
    drawerWidth: wp('65%'),
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
      activeBackgroundColor: 'red',
      activeTintColor: 'red',
      labelStyle: {
        fontSize: 16,
        //fontFamily: Fonts.light,
        // fontWeight: 100
        color: 'black',
      }
    },
  });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: MyDrawerNavigator,
    Auth: Login,
    Intro: AppIntro,
  
  },
  {
    initialRouteName: 'AuthLoading',
  }
));




