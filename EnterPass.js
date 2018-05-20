import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import Logo from './logo.png'

import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';



export default class Rest extends React.Component {




    render() {

        return (


            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={styles.box} >
                        <Image source={require('./logo.png')} style={styles.pic} />




                        <View>

                            <Text style={styles.textStyle}>Enter Your email to reset password</Text>
                            <Item >


                            <Input style={styles.inputfeilds} placeholder='Email Address' />
                            </Item>

                        </View>


                        {/* <Button rounded style={styles.buttons} >
                        <Text style={styles.buttonsText}>Login</Text>
                    </Button> */}

                        <TouchableOpacity style={styles.button}>

                            <Text style={styles.buttonsText}>Reset</Text>

                        </TouchableOpacity>

                    
                    </View>
                </KeyboardAvoidingView>
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
        width: "20%",
        height: "20%",
        // borderColor: 'blue',
        // borderWidth: 1,
        marginBottom: "5%",
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "lightgray",
    },

    box: {
        flex: 1,
        width: "70%",
        height: "50%",
        // marginLeft: "18%",
        marginTop: "5%",
        backgroundColor: "lightgray",
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
        // marginBottom: "5%"
        // borderColor: 'red',
        // borderWidth: 1,
    },

    inputfeilds: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'left',
        width: "100%",
        // height: "70%",
        borderWidth: 1,
        color: 'black',
        marginTop: "5%",
        // marginBottom: "5%",
        // marginLeft: "1%",
        backgroundColor: 'white',
        // borderColor: 'yellow',
        // borderWidth: 1,
        fontSize: 20,
    },


    button: {
        alignItems: 'center',
        backgroundColor: "#76323f",
        padding: 10,
        marginTop: "2%",
        width: '20%',
        fontSize: 30,
        borderRadius: 20,


    },


    buttons: {
        marginTop: 20,
        backgroundColor: "#fffaf0",
        width: "40%",
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: "30%",
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


    },
    textStyle1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        paddingTop: '5%',
        color: 'black',

    },

});
