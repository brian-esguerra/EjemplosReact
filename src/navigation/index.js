import { createStackNavigator, createAppContainer } from 'react-navigation';
import DrawerScreen from './stacks/drawerScreen';
import menuDrawer from './stacks/menuDrawer';

const Navigator = createStackNavigator({
    drawerScreen: {screen: DrawerScreen},
    menu: {screen: menuDrawer}
}, {
    headerMode: 'none',
    initialRouteName: 'menu'
})

export default createAppContainer(Navigator);
