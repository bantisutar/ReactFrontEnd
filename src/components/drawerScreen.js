import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, Image, StatusBar } from 'react-native';
import { DrawerActions } from 'react-navigation';
import styles from '../config/commonStyle';
import Icon from 'react-native-ionicons';
// import {storeData,retriveData} from '../config/storage';
import Colors from '../assets/colors/colors';

class DrawerScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Lets initialize results with the same struct we expect to receive from the api
      userInfo: []
    };
    //Using ES6 we need to bind methods to access 'this'
    //this.fetchData = this.fetchData.bind(this);
  }


  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }


  render() {
    const bgSrc = '../assets/profile.png';
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar
            backgroundColor={Colors.primary}
            barStyle="light-content" />
          <View style={styles.childcontainer}>
            <Image
              source={require('../assets/profile.png')}
              //Image Style
              style={styles.menuImage}
            />
            <Text style={styles.profiletext}>Banti Sutar</Text>
            <Text style={styles.profiletext1}>coolsutar.banti@gmail.com</Text>
          </View>
          <View>
            <View style={styles.menuItem}>
              <Icon name="md-megaphone" style={styles.iconimage} size={25} color={Colors.primary} />
              <Text onPress={this.navigateToScreen('Auth')} style={styles.menuText}>
                Home
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="md-person" style={styles.iconimage} size={25} color={Colors.primary} />
              <Text onPress={this.navigateToScreen('Cart')} style={styles.menuText}>
               Swtch Tab
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="md-card" style={styles.iconimage} size={25} color={Colors.primary} />
              <Text onPress={this.navigateToScreen('Rewards')} style={styles.menuText}>
                Rewards
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="md-star" style={styles.iconimage} size={25} color={Colors.primary} />
              <Text onPress={this.navigateToScreen('Donatebook')} style={styles.menuText}>
                Donate Book
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="md-share" style={styles.iconimage} size={25} color={Colors.primary} />
              <Text onPress={this.navigateToScreen('Whishlist')} style={styles.menuText}>
                Whishlist
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="md-mail" style={styles.iconimage} size={25} color={Colors.primary} />
              <Text onPress={this.navigateToScreen('Notification')} style={styles.menuText}>
                Notification
              </Text>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;