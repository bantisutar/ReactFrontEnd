import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-ionicons';
import { Card, ListItem, Divider } from 'react-native-elements'
export const { width, height } = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
class WheatherDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.cardContainer}>
                <ImageBackground source={require('../assets/back.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}>
                    <StatusBar
                        backgroundColor="#1D2764"
                        barStyle="light-content" />
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        flexDirection: 'column',
                        flex: 1,
                        backgroundColor: 'rgba(42, 29, 137, 0.8)',
                        right: 0,
                        bottom: 0
                    }}>
                        <View style={styles.cardContainer1}>
                            <Grid>
                                <Col>
                                    <View style={styles.card}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <View style={{ flexDirection: 'column', }}>
                                                <Text style={{ color: '#766EA7', padding: 0, fontSize: 14, marginLeft: 0, fontWeight: 'bold', }}>Sunrise</Text>
                                                <Text style={{ color: 'white', padding: 0, fontSize: 17, fontWeight: 'bold', }}>5.56 AM</Text>
                                            </View>

                                            <Icon style={{ marginLeft: 20, color: 'white', paddingLeft: 12 }}
                                                name='md-sunny' navigation
                                                onPress={() => navigation.openDrawer()}
                                                size={60} />
                                        </View>
                                        <View style={{ flexDirection: 'column', }}>
                                            <Text style={{ color: '#766EA7', padding: 0, fontSize: 14, marginLeft: 0, fontWeight: 'bold', }}>Sunset</Text>
                                            <Text style={{ color: 'white', padding: 0, fontSize: 17, fontWeight: 'bold', }}>5.56 PM</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                                            <Text style={{ color: '#766EA7', padding: 0, fontSize: 14, marginLeft: 0, fontWeight: 'bold', }}>Duration</Text>
                                            <Text style={{ color: 'white', padding: 0, fontSize: 17, fontWeight: 'bold', marginLeft: 20, }}>12 Hrs</Text>
                                        </View>
                                    </View>
                                </Col>
                                <Col>
                                    <View style={styles.card}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <View style={{ flexDirection: 'column', }}>
                                                <Text style={{ color: '#766EA7', padding: 0, fontSize: 14, marginLeft: 0, fontWeight: 'bold', }}>Moonrise</Text>
                                                <Text style={{ color: 'white', padding: 0, fontSize: 17, fontWeight: 'bold', }}>2.56 AM</Text>
                                            </View>

                                            <Icon style={{ marginLeft: 20, color: 'white', paddingLeft: 12 }}
                                                name='md-moon' navigation
                                                onPress={() => navigation.openDrawer()}
                                                size={60} />
                                        </View>
                                        <View style={{ flexDirection: 'column', }}>
                                            <Text style={{ color: '#766EA7', padding: 0, fontSize: 14, marginLeft: 0, fontWeight: 'bold', }}>Moonset</Text>
                                            <Text style={{ color: 'white', padding: 0, fontSize: 17, fontWeight: 'bold', }}>2.56 PM</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                                            <Text style={{ color: '#766EA7', padding: 0, fontSize: 14, marginLeft: 0, fontWeight: 'bold', }}>Duration</Text>
                                            <Text style={{ color: 'white', padding: 0, fontSize: 17, fontWeight: 'bold', marginLeft: 20, }}>12 Hrs</Text>
                                        </View>
                                    </View>
                                </Col>

                            </Grid>

                        </View>
                        <View style={styles.cardContainer2}>
                            <View style={styles.section2}>
                                <Text style={{ color: '#766EA7' }}>Temprature History</Text>
                            </View>
                            <View style={styles.section2Body}>
                                <View style={{ flex: 0, alignSelf: 'stretch', flexDirection: 'row' }}>
                                    <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                        <Text></Text>
                                        <Text style={{ color: '#766EA7', fontWeight: 'bold', padding: 4 }}>High</Text>
                                        <Text style={{ color: '#766EA7', fontWeight: 'bold', padding: 4 }}>Low</Text>
                                    </View>
                                    <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                        <Text style={{ color: '#766EA7' }}>Today</Text>
                                        <Text style={{ color: 'white', padding: 4, fontSize: 18 }}>40</Text>
                                        <Text style={{ color: 'white', padding: 4, fontSize: 18 }}>39</Text>
                                    </View>
                                    <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                        <Text style={{ color: '#766EA7' }}>Normal</Text>
                                        <Text style={{ color: 'white', padding: 4, fontSize: 18 }}>40</Text>
                                        <Text style={{ color: 'white', padding: 4, fontSize: 18 }}>32</Text>
                                    </View>
                                    <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                        <Text style={{ color: '#766EA7' }}>Record</Text>
                                        <Text style={{ color: 'white', padding: 4, fontSize: 18 }}>N/A</Text>
                                        <Text style={{ color: 'white', padding: 4, fontSize: 18 }}>N/A</Text>
                                    </View>
                                    <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                        <Text style={{ color: '#766EA7' }}>Updated</Text>
                                        <Text style={{ color: 'white', padding: 4, fontSize: 18 }}>40</Text>
                                        <Text style={{ color: 'white', padding: 4, fontSize: 18 }}>43</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.cardContainer3}>
                                <View style={styles.section2}>
                                    <Text style={{ color: '#766EA7' }}>Temprature Summary</Text>
                                </View>
                                <View style={styles.section2Body}>
                                    <View style={{ flex: 0, alignSelf: 'stretch', flexDirection: 'row' }}>
                                        <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                            <Text></Text>
                                            <Text style={{ color: '#766EA7', fontWeight: 'bold', padding: 4 }}>Yesterday</Text>
                                            <Text style={{ color: '#766EA7', fontWeight: 'bold', padding: 4 }}>Today</Text>
                                            <Text style={{ color: '#766EA7', fontWeight: 'bold', padding: 4 }}>Realfill</Text>
                                            <Text style={{ color: '#766EA7', fontWeight: 'bold', padding: 4 }}>Wind Chill</Text>
                                            <Text style={{ color: '#766EA7', fontWeight: 'bold', padding: 4 }}>Dew Point</Text>
                                            <Text style={{ color: '#766EA7', fontWeight: 'bold', padding: 4 }}>Realfill</Text>
                                        </View>
                                        <View style={{ flex: 1, alignSelf: 'stretch',alignItems: 'center', }}>
                                            <Text style={{ color: '#766EA7', fontWeight: 'bold', padding: 4 }}>Temp</Text>
                                            <Text style={{ color: 'white', fontWeight: 'bold', padding: 4 }}>54</Text>
                                            <Text style={{ color: 'white', fontWeight: 'bold', padding: 4 }}>23</Text>
                                            <Text style={{ color: 'white', fontWeight: 'bold', padding: 4 }}>34</Text>
                                            <Text style={{ color: 'white', fontWeight: 'bold', padding: 4 }}>29</Text>
                                            <Text style={{ color: 'white', fontWeight: 'bold', padding: 4 }}>25</Text>
                                            <Text style={{ color: 'white', fontWeight: 'bold', padding: 4 }}>40</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>


                </ImageBackground>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    cardContainer1: {
        flex: 1,
        //marginBottom: 2,
    },
    cardContainer2: {
        flex: 3,
        // position:'absolute'
        marginTop: 15,
    },
    // cardContainer3: {
    //     flex: 2,
    //     //marginTop: 15,
    // },
    card: {
        //marginTop: 5,
        margin: 5,
        padding: 10,
        backgroundColor: 'rgba(71, 57, 152, 0.6)',
        color: 'white',
        //height: 300
    },
    section2: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        padding: 10,
        backgroundColor: 'rgba(36, 40, 87, 0.6)',
        color: 'white',
        //height: 300
    },
    section2Body: {
        marginLeft: 5,
        marginRight: 5,
        padding: 10,
        backgroundColor: 'rgba(71, 57, 152, 0.6)',
        color: 'white',
        //height: 300
    },

    cardText: {
        color: 'white'
    },

});
export default WheatherDetail;
