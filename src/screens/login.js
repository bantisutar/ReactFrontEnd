import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Form from '../components/form';
import Wallpaper from '../components/wallpaper';
import Logo from '../components/logo';
import ButtonSubmit from '../components/buttonsubmit';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Wallpaper>
        <Logo />
       <Form />
      <ButtonSubmit navigation={this.props.navigation}/>
    </Wallpaper>
    );
  }
}

export default Login;
