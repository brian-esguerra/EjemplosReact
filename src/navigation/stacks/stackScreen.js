import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import ScreenHome from '../../containers/screenHome';
import ScreenViajes from '../../containers/screenViajes';

export const Home_StackNavigator = createStackNavigator({
    First: {
        screen: ScreenHome,
        navigationOptions : ({ navigation }) => ({
            title: 'Home',  
            headerStyle: {
                backgroundColor: 'rgb(255, 45, 25)',
            },
            headerTintColor: 'white',
            headerLeft: leftIconMenu({nav:navigation}),
            headerRight: rightIconMenu({nav: navigation})
        })
    }
})

export const Viajes_StackNavigator = createStackNavigator({
    Second: {
        screen: ScreenViajes,
        navigationOptions : ({ navigation }) => ({
            title: 'Mis Viajes',  
            headerStyle: {
                backgroundColor: 'rgb(255, 45, 25)',
            },
            headerTintColor: 'white',
            headerLeft: leftIconMenu({nav:navigation}),
            headerRight: rightIconMenu({nav: navigation})
            })
    }
})

const leftIconMenu = ({nav}) => {
    return <View>
        <TouchableHighlight 
            onPress={() => {
                nav.toggleDrawer();
            }}>
            <Text>iconleft</Text>
        </TouchableHighlight>
    </View>
}

const rightIconMenu = ({nav}) => {
    return <View>
        <TouchableHighlight 
            onPress={() => {
                //press icon
            }}>
            <Text>iconright</Text>
        </TouchableHighlight>
    </View>
}

