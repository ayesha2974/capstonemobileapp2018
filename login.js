import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import Logo from './logo.png';
import {LinearGradient} from 'expo'

import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';



export default class Login extends React.Component {



    // state = {
    //     username: 'yosra@yosra.com',
    //     password: 'Password1!',


    // }


    render() {

        return (

            <LinearGradient
            colors={['#e9e9e9','#76323f']}
            start={[0,1]}
            end={[1,0]}>
            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={styles.box} >
                        <Image source={require('./logo.png')} style={styles.pic} />

                        <View>
                            <Text style={styles.textStyle}>Username.Password</Text>
                            <Item >

                                <Input style={styles.inputfeilds} placeholder='Username.Password' />
                            </Item>

                        </View>

                        <TouchableOpacity style={styles.button}>

                            <Text style={styles.buttonsText}>Login</Text>

                        </TouchableOpacity>

                        <Text
                            style={styles.textStyle1}
                            onPress={() => { Linking.openURL('http://www.example.com/') }}
                        >

                    Change me back please

                    </Text>

                    </View>
                </KeyboardAvoidingView>
            </View>
            </LinearGradient>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e9e9e9',
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },

    pic: {
            width: 170,
            height: 160,
            alignItems: 'center',
            justifyContent: 'center',
    },

        box: {
            flex: 1,
            width: 500,
            height: 100,
            // marginLeft: "18%",
            marginTop: 10,
            backgroundColor: '#e9e9e9',
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
            
    },

    inputfeilds: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'left',
        width: 200,
        // height: "70%",
        borderWidth: 1,
        color: 'black',
        marginTop: 10,
        // marginBottom: "5%",
        // marginLeft: "1%",
        backgroundColor: 'white',
        // borderColor: 'blue',
        // borderWidth: 1,
        fontSize: 20,
    },


    button: {
        alignItems: 'center',
        backgroundColor: "#76323f",
        padding: 10,
        marginTop: 20,
        width: 100,
        // fontSize: 30,
        borderRadius: 20,


    },


    buttons: {
        marginTop: 20,
        backgroundColor: "#fffaf0",
        width: 80,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: 60,
        fontWeight: 'bold',
    },

    buttonsText: {

        color: 'white',
        fontSize: 25,


    },

    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#76323f',
        width:300,
        marginTop:25,

    },
    textStyle1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        paddingTop: '5%',
        color: '#787E84',
        

    },

});
