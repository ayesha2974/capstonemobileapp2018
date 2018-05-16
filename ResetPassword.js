import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView,Linking, ScrollView } from 'react-native';
import React from 'react';
import Logo from './logo.png'

import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';



export default class ResetPassword extends React.Component {



    // state = {
    //     username: 'yosra@yosra.com',
    //     password: 'Password1!',


    // }


    render() {

        return (


            <View style={styles.container} >
                <View style={styles.box} >
                    <Image source={require('./logo.png')} style={styles.pic} />

                    <View>

                        <Text style={styles.textStyle}>Enter Your email to reset password</Text>
                        <Item fixedLabel last>

                        <Input style={styles.inputfeilds} placeholder="Email Address" />
                        </Item>

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
        flex: 1,
        justifyContent: 'center',
        textAlign: 'left',
        width: "100%",
        height: "70%",
        borderWidth: 1,
        color: 'black',
        marginTop: "10%",
        marginBottom: "5%",
        marginLeft: "1%",
        backgroundColor: 'white'
    },

    buttons: {
        marginTop: 20,
        backgroundColor: "#76323f",
        width: "40%",
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: "30%"
    },

    buttonsText: {
        color: 'white',
        fontSize: 20,

    },

    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#76323f',

    },
  

});
