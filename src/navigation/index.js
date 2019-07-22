import { createStackNavigator, createAppContainer } from 'react-navigation';
import menuDrawer from './stacks/menuDrawer';

const Navigator = createStackNavigator({
    menu: {screen: menuDrawer}
}, {
    headerMode: 'none',
    initialRouteName: 'menu'
})

export default createAppContainer(Navigator);
