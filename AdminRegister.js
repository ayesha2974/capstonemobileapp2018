import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView,Picker} from 'react-native';
import React from 'react';
import Logo from './logo.png'
import ModalDropdown from 'react-native-modal-dropdown';

// import { Container, Header, Content, Form, Item, Input, Label, Button,TextInput } from 'native-base';



export default class AdminRegister extends React.Component {



    render() {

        return (


            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
               
                     
                        <View style={styles.main}>
                            <View>

                            <Text style={styles.textStyle}>College ID</Text>
                         
                           <TextInput
                           style={{ height: 40, width:300, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginRight:30}}
                           placeholder="College ID"
                           underlineColorAndroid='transparent'
                      
                         />
                           
                            </View>
                            <View>
                            <Text style={styles.textStyle}>Login ID</Text>
                             <TextInput placeholder="Login ID"
                           style={{height: 40, width:300, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginRight:30}}
                           underlineColorAndroid='transparent'
                     
                         />
                            </View>
                        </View>
                        <View style={styles.main}>
                            <View>
                            <Text style={styles.textStyle}>Name</Text>
                        
                            <TextInput placeholder="Name"
                           style={{height: 40, width:300, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginRight:30}}
                           underlineColorAndroid='transparent'
                     
                         />
                        
                            </View>
                            <View>
                            <Text style={styles.textStyle}>Contact No.</Text>
                            
                            <TextInput placeholder="Contact No."
                           style={{height: 40, width:300, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginRight:30}}
                           underlineColorAndroid='transparent'
                      
                         />
                           
                            </View>
                        </View>

                        <View style={styles.main}>
                            <View>
                            <Text style={styles.textStyle}>Personal(Recovery)Email</Text>
                          
                            <TextInput placeholder="Personal(Recovery)Email"
                            style={{height: 40, width:300, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginRight:30}}
                            underlineColorAndroid='transparent'
                       
                          />                            
                            </View>
                            <View>
                            <Text style={styles.textStyle}>College Email</Text>
                         
                            <TextInput placeholder="College Email"
                            style={{height: 40, width:300, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginRight:30}}
                            underlineColorAndroid='transparent'
                           
                          />    
                        
                            </View>
                        </View>

                        <View style={styles.main}>
                    
                            <View>
                            <Text style={styles.textStyle}>Role</Text>
                          
                            <ModalDropdown 
                            
                                 style={{borderColor:'black', borderWidth:1,backgroundColor:'white',height: 40, width:300,marginRight:30,paddingLeft:10}}
                                 options={['Admin','Instructor', 'Student']}
                                 textStyle={{fontSize:20}}
                                 dropdownTextStyle={{fontSize:20}}
                             
                                 />
                            </View>
                            
                            <View>
                           
                            <Text style={styles.textStyle}>Department</Text>
                           
                            <ModalDropdown 
                       
                            style={{borderColor:'black', borderWidth:1,backgroundColor:'white',height: 40, width:300,marginRight:30,paddingLeft:10}}
                            options={['Information Technology','Business', 'Engineering', 'Health']}
                            textStyle={{fontSize:20}}
                            dropdownTextStyle={{fontSize:15}}
                        
                            />
                           
                            </View>
                         
                        </View>
                   
                        <TouchableOpacity style={styles.button}>

                            <Text style={styles.buttonsText}>Reset</Text>
                          
                        </TouchableOpacity>

                    
                   
                </KeyboardAvoidingView>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
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
       
        height: 100,
        marginTop: 10,
        backgroundColor: 'white',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        alignItems: 'center',
        backgroundColor: "#76323f",
        padding: 10,
        marginTop: 30,
        width: 100,
        borderRadius: 20,
       
    },

    buttonsText: {

        color: 'white',
        fontSize: 25,


    },

    textStyle: {
        textAlign: 'left',
        marginLeft:5,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#76323f',
        width:300,
        marginTop:25,
        marginBottom:10,

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
