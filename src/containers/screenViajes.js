import React, { Component } from 'react';
import { View,Text,Button,Image, StyleSheet } from 'react-native';

class ScreenViajes extends Component {
    render() {
        return (
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Go back home"
          />
        );
      }
    }

export default ScreenViajes;