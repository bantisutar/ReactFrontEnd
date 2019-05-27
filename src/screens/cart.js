import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import Colors from '../assets/colors/colors';

const options = [
  { label: "01:00", value: "1" },
  { label: "01:30", value: "1.5" },
 
];
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    title: 'Cart',
    headerBackTitle: 'A much too long text for back button from B to A',
    headerTruncatedBackTitle: `to A`
  };
  render() {
    return (
      <View>
        <SwitchSelector
          options={options}
          initial={0}
          textColor={Colors.purple} //'#7a44cf'
          selectedColor={Colors.colorAccent}
          buttonColor={Colors.purple}
          borderColor={Colors.purple}
          hasPadding
          onPress={value => console.log(`Call onPress with value: ${value}`)}
        />
      </View>
    );
  }
}

export default Cart;
