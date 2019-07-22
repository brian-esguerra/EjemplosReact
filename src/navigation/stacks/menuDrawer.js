import React, { Component } from 'react';
import { Platform, StyleSheet, Text, 
    View, FlatList, TouchableOpacity, 
    Image, SafeAreaView } from 'react-native';
import Drawer from 'react-native-drawer';
import LinearGradient from 'react-native-linear-gradient';

import { MenuNavigator } from './stackScreen';
import NavigationService from '../services/navigationService';

import SvgUriN from 'react-native-svg-uri';

console.disableYellowBox = true;

const menu = [
    { 'title': 'Inicio', 'icon': require('../../icons/grid-1.png'), 'path': 'HomeOption' },
    { 'title': 'Analíticas', 'icon': require('../../icons/grid-2.png'), 'path': 'StatsOption' },
    { 'title': 'Viajes', 'icon': require('../../icons/grid-3.png') ,'path': 'TravelsOption'},
    { 'title': 'Mapa', 'icon': require('../../icons/grid-4.png') ,'path': 'MapOption'},
    { 'title': 'Chat','icon': require('../../icons/grid-5.png') ,'path': 'ChatOption'},
    { 'title': 'Configuraciones','icon': require('../../icons/grid-6.png') ,'path': 'ConfigOption'},
]

export default class menuDrawer extends Component {

    constructor(props) {
        super(props)
        this.state = { pressStatus: 'HomeOption' };
    }

    renderDrawer() {
        //SlideMenu
        return (
                <View style={styles.menuContainer}>
                    <FlatList
                        style={{height:'100%' }}
                        data={menu}
                        extraData={this.state}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={styles.menuTitleContainer} 
                                    onPress={this.changeNav.bind(this,item.path)}>
                                    <View style={{flexDirection:'row'}}>
                                        <Image
                                            source={item.icon}
                                            style={[styles.icon, {tintColor: this.state.pressStatus == item.path? '#f1f2f6': '#ced6e0' }]}
                                            />
                                        <Text
                                            key={index} 
                                            style={[styles.menuTitle, {color: this.state.pressStatus == item.path? '#f1f2f6': '#ced6e0' }]}
                                            >
                                        {item.title}
                                        </Text>
                                    </View>
                                    
                                </TouchableOpacity>
                            )
                        }} />
                </View>
            
        )
    }

    openDrawer() {
        // Open Menu
        this.drawer.open()
    }

    changeNav(path){
        // Change of view
        NavigationService.navigate(path);
        this.setState({ pressStatus: path });
        this.drawer.close();
    }

    closeDrawer() {
        // Close Menu
        this.drawer.close()
    }

    render() {
        return (
            <LinearGradient colors={['#007aff','#007aff','#00ff77']} > 
            <SafeAreaView style={styles.safeAreaStyle} >
                <View style={styles.mainContainer}>
                    <Drawer
                        ref={(ref) => this.drawer = ref}
                        content={this.renderDrawer()}
                        type='static'
                        tapToClose={true}
                        openDrawerOffset={0.35}
                        panOpenMask={0.3}
                        negotiatePan={true}
                        styles={drawerStyles}>
                         
                        <View style={styles.headerContainer}>
                            <View style={styles.menuButton}>
                                <TouchableOpacity
                                    onPress={this.openDrawer.bind(this)}>
                                    <Text>menu</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.headerTitle}>
                                <Image style={styles.iconTitle} source={require('../../Images/Logo3x.png')} />
                            </View>
                            <View style={styles.menuButton} />
                        </View>

                        <MenuNavigator
                            ref={navigatorRef => {
                                NavigationService.setTopLevelNavigator(navigatorRef);
                            }}
                        />
                        
                    </Drawer>
                </View>
                
            </SafeAreaView>
            </LinearGradient>
        );
    }
}

const drawerStyles = {
    drawer: {
        flex: 1.0,
    },
    main: {
        flex: 1.0,
        backgroundColor: 'white'
    }
}

const styles = {
    mainContainer: {
        flex: 1.0,
    },
    safeAreaStyle: {
        height: '100%',
    },
    headerContainer: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3B5998',
    },
    headerTitle: {
        flex: 1.0,
        textAlign: 'center',
        alignSelf: 'center',
    },
    menuButton: {
        marginLeft: 8,
        marginRight: 8,
        alignSelf: 'center',
        tintColor: 'white'
    },
    menuContainer: {
        flex: 1.0,
        marginTop:20,
    },
    menuTitleContainer: {
        height: 60,
        width:'100%',
        marginLeft:27,
        flexDirection:'row',
    },
    menuTitle: {
        opacity:0.7,
        marginLeft:20,
        textAlign:'left',
        fontSize: 17,
        flexDirection:'column',
        justifyContent: 'center',
    },
    icon: {
        width: 20,
        height: 20,
      },
    iconTitle:{
        width: 100,
        height: 35,
        resizeMode: 'stretch',
        alignSelf: 'center',
    }
}