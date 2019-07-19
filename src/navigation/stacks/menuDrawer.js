import React, { Component } from 'react';
import { Platform, StyleSheet, Text, 
    View, FlatList, TouchableOpacity, 
    Image, SafeAreaView } from 'react-native';
import Drawer from 'react-native-drawer';
import LinearGradient from 'react-native-linear-gradient';
console.disableYellowBox = true;

const menu = [
    { 'title': 'Inicio', 'icon': require('../../icons/grid-1.png') },
    { 'title': 'Analíticas', 'icon': require('../../icons/grid-2.png') },
    { 'title': 'Viajes', 'icon': require('../../icons/grid-3.png') },
    { 'title': 'Mapa', 'icon': require('../../icons/grid-4.png') },
    { 'title': 'Chat','icon': require('../../icons/grid-5.png') },
    { 'title': 'Configuraciones','icon': require('../../icons/grid-6.png') },
]

export default class menuDrawer extends Component {

    constructor(props) {
        super(props)

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
                                <TouchableOpacity style={styles.menuTitleContainer} onPress={this.closeDrawer.bind(this)}>
                                    <View style={{flexDirection:'row'}}>
                                        <Image
                                            source={item.icon}
                                            style={[styles.icon, {tintColor: 'white'}]}
                                            />
                                        <Text style={styles.menuTitle} key={index}>
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
        this.drawer.open()
    }

    closeDrawer() {
        this.drawer.close()
        // onTouchMove={this.openDrawer.bind(this)} >
    }

    render() {
        return (
            <LinearGradient colors={['#007aff', '#00ff77']}> 
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
                        {/* //Main View */}
                        <View style={styles.headerContainer}>
                            <View style={styles.menuButton}>
                                <TouchableOpacity
                                    onPress={this.openDrawer.bind(this)}>
                                    <Text>menu</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.headerTitle}>DRAWER</Text>
                            <View style={styles.menuButton} />
                        </View>
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
        //backgroundColor: '#3B5998',
    },
    main: {
        flex: 1.0,
        backgroundColor: 'white'
    }
}

const styles = {
    mainContainer: {
        flex: 1.0,
        //backgroundColor: 'white'
    },
    safeAreaStyle: {
        height: '100%',
        //backgroundColor: '#3B5998',
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
        color: 'white'
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
        //backgroundColor: '#3B5998',
    },
    menuTitleContainer: {
        height: 60,
        width:'100%',
        marginLeft:27,
        flexDirection:'row',
    },
    menuTitle: {
        color: '#ccc',
        opacity:0.6,
        marginLeft:20,
        textAlign:'left',
        fontSize: 17,
        flexDirection:'column',
        justifyContent: 'center',
    },
    icon: {
        width: 18,
        height: 18,
      },
}