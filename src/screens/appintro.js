/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../assets/3.png'),
    backgroundColor: '#22bcb5',
  }
];


type Props = {};
export default class AppIntro extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      showRealApp: false
    }
  }
  jewelStyle = function(backgroundColor) {
    return {
      //borderRadius: 50,
      backgroundColor: backgroundColor,
      flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    }
  }
  _renderItem = (item) => {
    return (
      <View style={this.jewelStyle(item.backgroundColor)}>
      <View >
        <Text style={styles.title}>{item.title}</Text>
        <Image style={{width: 200, height: 200,}} resizeMode='cover' source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    this.props.navigation.navigate('App');
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider showSkipButton='true' renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
    }
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'purple'
  },
  image: {
    width: 200,
    height: 250,
  },
  slide:{
    backgroundColor: 'red',
    height:800
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});
