import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Dimensions, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Colors from '../assets/colors/colors';
export const { width, height } = Dimensions.get('window');

class ViewAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeList: [],
            //Have a loading state where when data retrieve returns data. 
            loading: true
        };
    }
    async componentDidMount() {
        //Have a try and catch block for catching errors.


        fetch("https://digitallabpoc.firebaseio.com/product.json", { method: "GET" })
            .then((response) => response.json())
            .then((responseJson) => {
                const productArray = [];
                for (const key in responseJson) {
                    productArray.push({
                        title: responseJson[key].title,
                        price: responseJson[key].price,
                        desc: responseJson[key].desc,
                        image: responseJson[key].image,
                        id: key,
                    })
                }

                console.log(productArray);
                this.setState({ pokeList: productArray, loading: false });
            })
            .done();



    }

    renderItem(data) {
        return <View style={{ margin: 10, justifyContent: 'center', alignItems: 'center', }}>
            <Image source={{ uri: data.item.image }} style={{ width: 80, height: 80, borderRadius: 50, borderWidth: 2, borderColor: '#FEF5F5', rersizeMode: 'contain' }} />
            <View style={{ backgroundColor: "white", padding: 5, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontWeight: "bold" }}>{data.item.title}</Text>
                <Text>{data.item.desc}</Text>
            </View>
        </View>
    }
    render() {
        //Destruct pokeList and Loading from state.
        const { pokeList, loading } = this.state;
        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if (!loading) {
            return <View >
                <ScrollView>
                    <View style={styles.shadow}>
                        <View style={{
                            backgroundColor: 'white', padding: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, borderColor: '#FEF5F5', // if you need 
                            borderTopWidth: 5,
                            overflow: 'hidden',
                            borderBottomColor: '#FEF5F5',
                            borderBottomWidth: 2,
                            shadowColor: '#FEF5F5',
                            shadowRadius: 6,
                            shadowOpacity: 1,
                        }}>
                            <Text style={{ color: Colors.primary, padding: 6, fontWeight: 'bold' }}> Recentlty Viewed </Text>

                            <Button
                                title='View All'
                                color={Colors.primary}
                                accessibilityLabel="View All"
                                style={{ color: 'red' }}
                                onPress={this._routetoViewall}
                            />
                        </View>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}

                            data={pokeList}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item._id}
                            style={{ width: width + 5 }}
                        />
                    </View>

                    <View style={styles.shadow}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}

                            data={pokeList}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item.title}
                            style={{ width: width + 5 }}
                        />
                    </View>
                    <View style={styles.shadow}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}

                            data={pokeList}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item.title}
                            style={{ width: width + 5 }}
                        />
                    </View>
                    <View style={styles.shadow}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}

                            data={pokeList}
                            renderItem={this.renderItem}
                            keyExtractor={(item) => item.title}
                            style={{ width: width + 5 }}
                        />
                    </View>
                </ScrollView>
            </View>
        } else {

            return <View style={{ justifyContent: 'center', marginTop: 30, alignItems: 'center', }}>
                <ActivityIndicator />
            </View>
        }
    }
}


const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    pokeItemHeader: {
        color: 'black',
        fontSize: 24,
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    },
    item: {
        padding: 10,
        //borderRadius: 4,
        borderRightWidth: 0.2,
        borderRightColor: '#FEF5F5',
        color: 'white'
    },
    shadow: {
        borderBottomWidth: 10,
        overflow: 'hidden',
        borderBottomColor: '#FEF5F5',
        borderBottomWidth: 10,
        shadowColor: '#FEF5F5',
        shadowRadius: 10,
        shadowOpacity: 1
    }
})

export default ViewAll;