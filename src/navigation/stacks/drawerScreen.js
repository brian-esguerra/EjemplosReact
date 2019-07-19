import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { View, Text, Image, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

import { Home_StackNavigator, Viajes_StackNavigator } from './stackScreen';

const { width, height } = Dimensions.get('screen');

const DrawerScreen = createDrawerNavigator(
    {
        ScreenHome: {
            screen: Home_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: ({ tintColor }) => (
                    <Image
                      source={require('../../icons/icon_1.png')}
                      style={[styles.icon, {tintColor: tintColor}]}
                    />
                  ),
            },
        },
        ScreenViajes: {
            screen: Viajes_StackNavigator,
            navigationOptions: {
                drawerLabel: 'Mis Viajes',
                drawerIcon: ({ tintColor }) => (
                    <Image
                    source={require('../../icons/icon_2.png')}
                      style={[styles.icon, {tintColor: tintColor}]}
                    />
                  ),
            }
        },
    }, {
      headerMode: 'float',
      initialRouteName: 'ScreenHome',
      drawerWidth: Math.min(height, width) * 0.6,
      contentOptions: {
        activeTintColor: 'blue',
        TintColor: '#efefef',
        activeBackgroundColor: 'gray',
        itemsContainerStyle: {
          marginVertical: 60,
          backgroundColor: '#fff'
        },
        iconContainerStyle: {
          opacity: 1,
        }
      }
    });

    const styles = StyleSheet.create({
        icon: {
          width: 18,
          height: 18,
        },
      });


export default createAppContainer(DrawerScreen);