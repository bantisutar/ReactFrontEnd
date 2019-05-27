import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, StatusBar, Image, Dimensions } from 'react-native';
import Icon from 'react-native-ionicons';
import SwiperFlatList from 'react-native-swiper-flatlist';
export const { width, height } = Dimensions.get('window');
import { Card } from 'react-native-elements'
import Colors from '../assets/colors/colors';
import colors from '../assets/colors/colors';
import { SharedElement } from 'react-native-motion';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"

const styles = StyleSheet.create({
  iconimage: {
    paddingLeft: 20,
  },
  container: {
    // flex: 1,
    //padding:5,
    backgroundColor: 'white',
    // margin:10
  },
  child: {
    height:  hp('20%'),
    width: width,
    justifyContent: 'center',
  },
  text: {
    fontSize: RF(3.5),
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100
  },
  item: {
    padding: 7,
    marginRight:10,
    marginLeft: 10,
    //width: wp('24%'),
    //borderRadius: 4,
    fontSize: RF(2.0),
   // borderRightWidth: 0.2,
    borderRightColor: '#FEF5F5',
    color: 'white'
  }
});
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this._routetoViewall = this._routetoViewall.bind(this);
  }
  _routetoViewall(){
    this.props.navigation.navigate('ViewAll');
  }
  render() {
    return (

      <View>
        <ScrollView>
          <View style={{ backgroundColor: Colors.primary, height:hp('10%') }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Text style={styles.item}>Afghanistan</Text>
              <View style={styles.separator} />
              <Text style={styles.item}>Bangladesh</Text>
              <View style={styles.separator} />
              <Text style={styles.item}>Canada</Text>
              <View style={styles.separator} />
              <Text style={styles.item}>Denmark</Text>
              <View style={styles.separator} />
              <Text style={styles.item}>Egypt</Text>
              <View style={styles.separator} />
              <Text style={styles.item}>Faroe Islands</Text>
              <View style={styles.separator} />
            </ScrollView>
          </View>
          <View style={{ position: 'absolute', top: 30, margin: 15,marginBottom:30,borderWidth:3,borderColor:'#F4E8EF',borderTopLeftRadius: 20,borderTopRightRadius: 20, }}>
            <SwiperFlatList
              autoplayDelay={2}
              autoplayLoop
              index={0}

            >
              <View style={[styles.child]}>
                <Image
                  style={{ width: width, height: height / 4, resizeMode: 'stretch', }}
                  source={{ uri: 'https://www.vishumoney.com/images/mobile-phone/mobile-phone-banner.png' }}
                />
              </View>
              <View style={[styles.child]}>
                <Image
                  style={{ width: width, height: height / 4, resizeMode: 'stretch' }}
                  source={{ uri: 'https://www.vishumoney.com/images/mobile-phone/mobile-phone-banner.png' }}
                />
              </View>
              <View style={[styles.child]}>
                <Image
                  style={{ width: width, height: height / 4, resizeMode: 'stretch' }}
                  source={{ uri: 'https://www.vishumoney.com/images/mobile-phone/mobile-phone-banner.png' }}
                />
              </View>
              <View style={[styles.child]}>
                <Image
                  style={{ width: width, height: height / 4, resizeMode: 'stretch' }}
                  source={{ uri: 'https://www.vishumoney.com/images/mobile-phone/mobile-phone-banner.png' }}
                />
              </View>
            </SwiperFlatList>
          </View>
          <View style={{ marginTop: 150, }}>
            <View style={{ padding: 3, margin: 2 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                <View style={{ marginRight: 5,justifyContent:'center',alignItems: 'center', }}>
                  <Image source={{ uri: 'https://i.pinimg.com/originals/69/2d/2d/692d2d2d82c03fb1a7c37466ad64c8b8.png' }} style={{ width: width / 4, height: width / 4, borderRadius: 50, borderWidth: 2, borderColor: '#FEF5F5', rersizeMode: 'contain' }} />
                  <View style={{ backgroundColor: "white", padding: 5,justifyContent:'center',alignItems: 'center', }}>
                    <Text style={{ fontWeight: "bold",  fontSize: RF(2.1), }}>shoes</Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>

                <View style={{ marginRight: 5 ,justifyContent:'center',alignItems: 'center',}}>
                  <Image source={{ uri: 'http://www.pngmart.com/files/7/IPhone-PNG-Background-Image.png' }} style={{ width: width / 4, height: width / 4, borderRadius: 50, borderWidth: 2, borderColor: '#FEF5F5', rersizeMode: 'contain' }} />
                  <View style={{ backgroundColor: "white", padding: 5,justifyContent:'center',alignItems: 'center', }}>
                    <Text style={{ fontWeight: "bold",  fontSize: RF(2.1), }}>Mobiles</Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>

                <View style={{ marginRight: 5 ,justifyContent:'center',alignItems: 'center',}}>
                  <Image source={{ uri: 'https://in.jbl.com/on/demandware.static/-/Sites-siteCatalog_JB_INDIA/default/dw3b850aff/navigation/navigation-thumb/JBL_headphones_E_Series_324x324px_2.png' }} style={{ width: width / 4, height: width / 4, borderRadius: 50, borderWidth: 2, borderColor: '#FEF5F5', rersizeMode: 'contain' }} />
                  <View style={{ backgroundColor: "white", padding: 5,justifyContent:'center',alignItems: 'center', }}>
                    <Text style={{ fontWeight: "bold",  fontSize: RF(2.1), }}>headphones</Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>

                <View style={{ marginRight: 5,justifyContent:'center',alignItems: 'center', }}>
                  <Image source={{ uri: 'https://img.freepik.com/free-vector/hand-holding-shopping-bags_23-2147491522.jpg?size=338&ext=jpg' }} style={{ width: width / 4, height: width / 4, borderRadius: 50, borderWidth: 2, borderColor: '#FEF5F5', rersizeMode: 'contain' }} />
                  <View style={{ backgroundColor: "white", padding: 5 ,justifyContent:'center',alignItems: 'center',}}>
                    <Text style={{ fontWeight: "bold",  fontSize: RF(2.1), }}>Sale</Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>

                <View style={{ marginRight: 5,justifyContent:'center',alignItems: 'center', }}>
                  <Image source={{ uri: 'https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/31181907/skittish-shoes-shop-logo-PNG-Transparent-Images.png' }} style={{ width: width / 4, height: width / 4, borderRadius: 50, borderWidth: 2, borderColor: '#FEF5F5', rersizeMode: 'contain' }} />
                  <View style={{ backgroundColor: "white", padding: 5,justifyContent:'center',alignItems: 'center', }}>
                    <Text style={{ fontWeight: "bold",  fontSize: RF(2.1), }}>Styling</Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>

              </ScrollView>
            </View>
            <View style={{ backgroundColor: 'white', padding:5, flexDirection: 'row', justifyContent: 'space-between',marginBottom:20 ,borderColor:'#FEF5F5', // if you need 
              borderTopWidth:5,
              overflow: 'hidden',
              borderBottomColor: '#FEF5F5',
              borderBottomWidth:2,
              shadowColor: '#FEF5F5',
              shadowRadius: 6,
              shadowOpacity: 1,}}>
              <Text style={{ color: colors.primary,padding:6,fontWeight:'bold' }}> Recentlty Viewed </Text>
              
                <Button
                  title='View All'
                  color={Colors.primary}
                  accessibilityLabel="View All"
                  style={{color:'red'}}
                  onPress={this._routetoViewall}
                />
                
             
            </View>
            <View style={{ padding: 3, margin: 4 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                <View style={{ marginRight: 5 }}>
                  <Image source={{ uri: 'https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/31181907/skittish-shoes-shop-logo-PNG-Transparent-Images.png' }} style={{ width: width / 4, height: width / 4, borderRadius: 50, borderWidth: 2, borderColor: '#FEF5F5', rersizeMode: 'contain' }} />
                  <View style={{ backgroundColor: "white", padding: 5,justifyContent:'center',alignItems: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: RF(2.1) }}>Winter </Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>

                <View style={{ marginRight: 5 }}>
                  <Image source={{ uri: 'https://logopond.com/logos/3d0b797c1f340ff7fe927acf02e320f2.png' }} style={{ width: width / 4, height: width / 4, borderRadius: 50, borderWidth: 2, borderColor: '#FEF5F5', rersizeMode: 'contain' }} />
                  <View style={{ backgroundColor: "white", padding: 5,justifyContent:'center',alignItems: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: RF(2.1) }}>Winter </Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>

                <View style={{ marginRight: 5 }}>
                  <Image source={{ uri: 'https://cdn.dribbble.com/users/11373/screenshots/493150/cardinal.png' }} style={{ width: width / 4, height: width / 4, borderRadius: 50, borderWidth: 2, borderColor: '#FEF5F5', rersizeMode: 'contain' }} />
                  <View style={{ backgroundColor: "white", padding: 5,justifyContent:'center',alignItems: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: RF(2.1) }}>Winter </Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>

                <View style={{ marginRight: 5 }}>
                  <Image source={{ uri: 'https://www.logocowboy.com/wp-content/uploads/2016/02/scoutmarketing1.png' }} style={{ width: width / 4, height: width / 4, borderRadius: 50, borderWidth: 2, borderColor: '#FEF5F5', rersizeMode: 'contain' }} />
                  <View style={{ backgroundColor: "white", padding: 5,justifyContent:'center',alignItems: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: RF(2.1) }}>Winter </Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>

                <View style={{ marginRight: 5 }}>
                  <Image source={{ uri: 'https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/31181907/skittish-shoes-shop-logo-PNG-Transparent-Images.png' }} style={{ width: width / 4, height: width / 4, borderRadius: 50, borderWidth: 2, borderColor: '#FEF5F5', rersizeMode: 'contain' }} />
                  <View style={{ backgroundColor: "white", padding: 5,justifyContent:'center',alignItems: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: RF(2.1) }}>Winter </Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>

              </ScrollView>
            </View>
            <SharedElement id="source">
            <View style={{ 
              borderColor:'#FEF5F5', // if you need 
              borderWidth:10,
              overflow: 'hidden',
              shadowColor: '#FEF5F5',
              shadowRadius: 10,
              shadowOpacity: 1,
              marginTop:10,
              marginBottom: 20,
              paddingTop: 20,
              paddingBottom:30,
                            
            }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                <View style={{ marginRight: 5,width: width / 2,flex:1,justifyContent: 'center',alignItems:'center',borderRightColor:'#FEF5F5',borderRightWidth:2 }}>
                  <Image source={{ uri: 'https://i.pinimg.com/originals/69/2d/2d/692d2d2d82c03fb1a7c37466ad64c8b8.png' }} style={{ width: width, height: 130, borderColor: '#FEF5F5', resizeMode: 'contain',padding:5 }} />
                  <View style={{ backgroundColor: "white", padding: 5 }}>
                    <Text style={{ fontWeight: "bold",fontSize: RF(2.1) }}>Winter </Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>

                <View style={{ marginRight: 5,width: width / 2,flex:1,justifyContent: 'center',alignItems:'center',borderRightColor:'#FEF5F5',borderRightWidth:2 }}>
                  <Image source={{ uri: 'http://www.pngmart.com/files/7/IPhone-PNG-Background-Image.png' }} style={{ width: width, height: 130, borderColor: '#FEF5F5', resizeMode: 'contain',padding:5 }} />
                  <View style={{ backgroundColor: "white", padding: 5 }}>
                    <Text style={{ fontWeight: "bold",fontSize: RF(2.1) }}>Winter </Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>
                <View style={{ marginRight: 5,width: width / 2,flex:1,justifyContent: 'center',alignItems:'center',borderRightColor:'#FEF5F5',borderRightWidth:2 }}>
                  <Image source={{ uri: 'https://purepng.com/public/uploads/large/purepng.com-headphoneelectronics-headset-headphone-941524670109tnfcf.png' }} style={{ width: width, height: 130, borderColor: '#FEF5F5', resizeMode: 'contain',padding:5 }} />
                  <View style={{ backgroundColor: "white", padding: 5 }}>
                    <Text style={{ fontWeight: "bold",fontSize: RF(2.1) }}>Winter </Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>
                <View style={{ marginRight: 5,width: width / 2,flex:1,justifyContent: 'center',alignItems:'center',borderRightColor:'#FEF5F5',borderRightWidth:2 }}>
                  <Image source={{ uri: 'https://i.pinimg.com/originals/69/2d/2d/692d2d2d82c03fb1a7c37466ad64c8b8.png' }} style={{ width: width, height: 130, borderColor: '#FEF5F5', resizeMode: 'contain',padding:5 }} />
                  <View style={{ backgroundColor: "white", padding: 5 }}>
                    <Text style={{ fontWeight: "bold",fontSize: RF(2.1) }}>Winter </Text>
                    <Text>20% Discount</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            </SharedElement>
          </View>

         
        </ScrollView>
      </View>
    );
  }

}

export default Home;
