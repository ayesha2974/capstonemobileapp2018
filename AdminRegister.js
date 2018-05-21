import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView} from 'react-native';
import React from 'react';
import Logo from './logo.png'
import ModalDropdown from 'react-native-modal-dropdown';

import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';



export default class AdminRegister extends React.Component {




    render() {

        return (


            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={styles.box} >
                     


                        <View style={styles.main}>
                            <View>
                            <Text style={styles.textStyle}>College ID</Text>
                            <Item >
                            <Input style={styles.inputfeilds} placeholder='College ID' />
                            </Item> 
                            </View>
                            <View>
                            <Text style={styles.textStyle}>Login ID</Text>
                            <Item >
                            <Input style={styles.inputfeilds} placeholder='Login ID' />
                            </Item>
                            </View>
                        </View>
                        <View style={styles.main}>
                            <View>
                            <Text style={styles.textStyle}>Name</Text>
                            <Item >
                            <Input style={styles.inputfeilds} placeholder='Name' />
                            </Item> 
                            </View>
                            <View>
                            <Text style={styles.textStyle}>Contact No.</Text>
                            <Item >
                            <Input style={styles.inputfeilds} placeholder='Contact No.' />
                            </Item>
                            </View>
                        </View>

                        <View style={styles.main}>
                            <View>
                            <Text style={styles.textStyle}>Personal(Recovery)Email</Text>
                            <Item >
                            <Input style={styles.inputfeilds} placeholder='Personal(Recovery)Email' />
                            </Item> 
                            </View>
                            <View>
                            <Text style={styles.textStyle}>College Email</Text>
                            <Item >
                            <Input style={styles.inputfeilds} placeholder='College Email' />
                            </Item>
                            </View>
                        </View>

                        <View style={styles.main}>
                            <View>
                            <Text style={styles.textStyle}>Role</Text>
                            <Item >
                            <Input style={styles.inputfeilds} placeholder='Personal(Recovery)Email' />
                            </Item> 
                            </View>
                            <View>
                            <Text style={styles.textStyle}>Department</Text>
                            <ModalDropdown style={styles.dropdown}
                         
                            options={['Information Technology','Business', 'Engineering', 'Health']}
                        
                            />
                            </View>
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
        backgroundColor: '#e9e9e9',
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        
    },



    pic: {
        width: 180,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main:{
        flexDirection: 'row',

    },
    dropdown: {
       
       
        fontSize:18,
        marginBottom:10,

    },

    box: {
        flex: 1,
        width: 800,
        height: 100,
        // flexDirection:'row',
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
        marginLeft:40,
        borderWidth: 1,
        color: 'black',
        marginTop: 10,
        backgroundColor: 'white',
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
        textAlign: 'left',
        marginLeft:45,
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
