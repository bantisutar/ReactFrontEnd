import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackground, Image, TouchableHighlight, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this._routetoViewall = this._routetoViewall.bind(this);
  }

  _routetoViewall(){
    this.props.navigation.navigate('WheatherDetail');
    
  }

  render() {
    return (
      <ImageBackground source={require('../assets/back.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}>
        <StatusBar
          backgroundColor="#1D2764"
          barStyle="light-content" />
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          // flex:1,
          backgroundColor: 'rgba(42, 29, 137, 0.9)',
          right: 0,
          bottom: 0
        }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 40,
            flex: 2
          }}>
            <View
              style={{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: Dimensions.get('window').width * 0.7,
                height: Dimensions.get('window').width * 0.7,
                backgroundColor: 'rgba(71, 57, 152, 0.5)',
                borderColor: 'rgba(160, 160, 190, 0.1)',
                borderWidth: 10,
                justifyContent:'center',
                alignItems:'center'
              }}
              underlayColor='#ccc'
              onPress={() => alert('Yaay!')}
            >
              <Text style={{ color: 'white', fontSize: RF(11),  }}> 23 <Text style={{ color: '#766EA7', fontSize: 40, top: 10 }}>0c</Text></Text>
              <Text style={{ color: 'white',  }}> Party Sunny</Text>
            </View>
          </View>
          {/* <LinearGradient
          start={{ x: 0.0, y: 0.0 }} end={{ x: 0.5, y: 0.9 }}
          locations={[0, 0.4, 0.9]}
          colors={['#3F3FBF', '#3F3FBF', '#735396']} style={styles.linearGradient}> */}


          <View style={styles.cardContainer}>
            <Grid>
              <Col>
                <View style={styles.card}>
                  <View style={{ flexDirection: 'row', }}>
                    <Icon style={{ paddingLeft: 10, color: '#766EA7', padding: 0 }}
                      name='md-cloudy-night' navigation
                      onPress={() => navigation.openDrawer()}
                      size={25} />
                    <Text style={{ color: '#766EA7', padding: 10, fontSize: 14, marginLeft: 0, fontWeight: 'bold', }}>Humidity</Text>
                  </View>
                  <Text style={{ color: 'white', padding: 0, fontSize: 17 }}>20%</Text>
                </View>
              </Col>
              <Col>
                <View style={styles.card}>
                  <View style={{ flexDirection: 'row', }}>
                    <Icon style={{ paddingLeft: 10, color: '#766EA7', padding: 0 }}
                      name='md-cloudy-night' navigation
                      onPress={() => navigation.openDrawer()}
                      size={25} />
                    <Text style={{ color: '#766EA7', padding: 10, fontSize: 14, marginLeft: 0, fontWeight: 'bold', }}>Pressure</Text>
                  </View>
                  <Text style={{ color: 'white', padding: 0, fontSize: 17 }}>1014.00MB</Text>
                </View>
              </Col>
              <Col>
                <View style={styles.card}>
                  <View style={{ flexDirection: 'row', }}>
                    <Icon style={{ paddingLeft: 10, color: '#766EA7', padding: 0 }}
                      name='md-cloudy-night' navigation
                      onPress={() => navigation.openDrawer()}
                      size={25} />
                    <Text style={{ color: '#766EA7', padding: 10, fontSize: 14, marginLeft: 0, fontWeight: 'bold', }}>Cloud </Text>
                  </View>
                  <Text style={{ color: 'white', padding: 0, fontSize: 17 }}>20%</Text>
                </View>
              </Col>
            </Grid>
          </View>
          <TouchableHighlight onPress={this._routetoViewall} style={{ top: -30, alignItems: 'center', }}>

            
              <Text style={{ color: '#766EA7', fontSize: 20 }}>More Details -></Text>
            
          </TouchableHighlight>
          <View style={styles.cardContainer}>
            <Grid>
              <Col>
                <View style={styles.card1}>
                  <Text style={{ color: '#766EA7', padding: 10 }}>Friday</Text>
                  <Icon style={{ paddingLeft: 10, color: 'white', padding: 10 }}
                    name='md-cloudy-night' navigation
                    onPress={() => navigation.openDrawer()}
                    size={33} />
                  <Text style={{ color: 'white', padding: 10 }}>32 0 C</Text>
                </View>
              </Col>
              <Col>
                <View style={styles.card1}>
                  <Text style={{ color: '#766EA7', padding: 10 }}>Monday</Text>
                  <Icon style={{ paddingLeft: 10, color: 'white', padding: 10 }}
                    name='md-cloudy-night' navigation
                    onPress={() => navigation.openDrawer()}
                    size={33} />
                  <Text style={{ color: 'white', padding: 10 }}>32 0 C</Text>
                </View>
              </Col>
              <Col>
                <View style={styles.card1}>
                  <Text style={{ color: '#766EA7', padding: 10 }}>Sunday</Text>
                  <Icon style={{ paddingLeft: 10, color: 'white', padding: 10 }}
                    name='md-cloudy-night' navigation
                    onPress={() => navigation.openDrawer()}
                    size={33} />
                  <Text style={{ color: 'white', padding: 10 }}>32 0 C</Text>
                </View>
              </Col>
            </Grid>
          </View>

          {/* </LinearGradient> */}
        </View>
      </ImageBackground>
    );
  }
}
// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  card: {

    overflow: 'hidden',
    borderBottomColor: '#3C457C',
    justifyContent: 'center',
    //shadowColor: 'rgba(71, 57, 152, 0.6)',
    height: '65%',
    margin: 5,
    width: null,
    shadowRadius: 6,
    flexDirection: 'column',
    //shadowOpacity: 1,
    alignItems: 'center',
    padding: 1,
    backgroundColor: 'rgba(71, 57, 152, 0.6)',
    color: 'white'
  },
  card1: {

    overflow: 'hidden',
    borderBottomColor: '#3C457C',
    //justifyContent:'center',
    //shadowColor: 'rgba(71, 57, 152, 0.6)',
    height: '100%',
    margin: 5,
    shadowRadius: 6,
    flexDirection: 'column',
    //shadowOpacity: 1,
    alignItems: 'center',
    padding: 2,
    backgroundColor: 'rgba(71, 57, 152, 0.6)',
    color: 'white'
  },
  cardText: {
    color: 'white'
  },
  cardContainer: {
    flex: 1,
    marginBottom: 2,
  }
});

export default Information;
