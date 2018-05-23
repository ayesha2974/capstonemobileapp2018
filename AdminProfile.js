import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView, Picker } from 'react-native';
import React from 'react';
import Logo from './logo.png'
import { createBottomTabNavigator } from 'react-navigation'

class AdminProfile extends React.Component {

    static navigationOptions = {
        tabBarlabel: 'second',
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 25 }}>Welcome to Home!</Text>
            </View>
        )
    }
}

class Tab2 extends React.Component {

    render() {
        return (
            <View style={{ marginTop: 25 }}>
                <Text style={{ fontSize: 25, color: 'red' }} >Welcome to the Second Tab2!</Text>
            </View>
        )
    }
}

class Tab3 extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 25 }} >Welcome to  the Tab3!</Text>
            </View>
        )
    }
}
class Tab4 extends React.Component {

    render() {
        return (
            <View style={{ marginTop: 25 }}>
                <Text style={{ fontSize: 25 }} >Welcome to the Tab4!</Text>
            </View>
        )
    }
}
export default createBottomTabNavigator(

    {
        Home: { screen: AdminProfile },
        Second: { screen: Tab2 },
        Third: { screen: Tab3 },
        Fourth: { screen: Tab4 },
    },
    {
        tabBarPosition: "Top",
        tabBarOptions: {
            activeTintColor: 'grey',
            inactiveTintColor: 'red',
            backgroundColor: '#76323f',
            showIcon: true,
        },

        // headerTintColor: 'black',


        // style: {
        // 	backgroundColor: 'orange',
        // 	borderTopWidth: 1,
        // 	borderTopColor: 'white'
        // },
    }
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e9e9e9',
        // width: "100%",
        // height: "100%",
        // alignItems: 'center',
        // // padding: 16,
        // paddingTop: 50,
    },

});
