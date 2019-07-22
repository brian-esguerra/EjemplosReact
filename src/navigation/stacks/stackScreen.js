import React from 'react';
import { createStackNavigator , createAppContainer } from 'react-navigation';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import ScreenHome from '../../containers/screenHome';
import ScreenViajes from '../../containers/screenViajes';

export const MenuNavigator = createAppContainer(createStackNavigator({
    HomeOption: ScreenHome,
    TravelsOption: ScreenViajes,
  }, {
    headerMode:'none',
    initialRouteName: 'HomeOption',
}));

