import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView,Linking, ScrollView } from 'react-native';
import React from 'react';
import Logo from './logo.png'

import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';



export default class Login extends React.Component {



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

                        <Text style={styles.textStyle}>Username.Password</Text>
                        <Item >
                      

                            <Input style={styles.inputfeilds} placeholder='Username.Password'/>
                        </Item>

                    </View>


                    <Button rounded style={styles.buttons} >
                        <Text style={styles.buttonsText}>Login</Text>
                    </Button>
                 
                    <Text
                        style={styles.textStyle1}
                        onPress={() => { Linking.openURL('http://www.example.com/') }}
                    >
                       Forgut Your Password?
                    </Text>


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
        // borderColor: 'blue',
        // borderWidth:1,
        marginBottom: "15%",
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "lightgray",
    },

    box: {
        flex: 1,
        width: "70%",
        height: "50%",
        // marginLeft: "18%",
        marginTop: "10%",
        backgroundColor: "lightgray",
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
        // marginBottom: "5%"

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
        fontSize: 20,
        color: '#76323f',

    },
    textStyle1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        paddingTop: '5%',

    },

});
