import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import Logo from './logo.png'

import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';



export default class ResetPassword2 extends React.Component {


    // state = {
    //     username: 'yosra@yosra.com',
    //     password: 'Password1!',


    // }

    render() {

        return (


            <View style={styles.container} >
                <View style={styles.box} >
                    <Image source={require('./logo.png')} style={styles.pic} />


                    <View >
                        <Text style={styles.textStyle}>Reset Password</Text>
                    </View>

                    <View style={styles.inputfeilds}>

                        <TextInput underlineColorAndroid= 'transparent' placeholder='New Password' />
                </View>
                    <View style={styles.inputfeilds2}>
                        <TextInput underlineColorAndroid= 'transparent' placeholder='Confirm New Password' />
                    </View>


                <Button rounded style={styles.buttons} >
                    <Text style={styles.buttonsText}>Reset</Text>
                </Button>



            </View>
            </View>




        );
    }
}


const styles = StyleSheet.create({
    container: {

        backgroundColor: 'lightgray',
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },

    pic: {
        width: "65%",
        height: "30%",
        marginBottom: "15%",
        backgroundColor: "lightgray",
    },

    box: {
        flex: 1,
        width: "70%",
        height: "50%",
        marginTop: "10%",
        backgroundColor: "lightgray",
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
   
    },

    inputfeilds: {
        width: "80%",
        height: "8%",
        marginTop: "5%",
        paddingTop: 10,
        paddingLeft: 8,
        backgroundColor: 'white',

    },
    inputfeilds2: {
        width: "80%",
        height: "8%",
        paddingLeft: 8,
        marginTop: "5%",
        paddingTop: 10,
        backgroundColor: 'white',

    },

    buttons: {
        marginTop: 20,
        backgroundColor: "#76323f",
        width: "40%",
        justifyContent: 'center',
    
        marginLeft: "30%"
    },
    buttonsText: {
        color: 'white',
        fontSize: 20,
    },

    textStyle: {
        fontWeight: 'bold',
        fontSize: 23,
        color: '#76323f',
    },


});
