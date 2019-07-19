import { AppRegistry} from 'react-native';
import React from 'react';


//import { createDrawerNavigator } from 'react-navigation';
import Navigator from './src/navigation/index';

export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
        <Navigator/>
    );
  }
}

//AppRegistry.registerComponent('menuDrawerNavigation', () => App);