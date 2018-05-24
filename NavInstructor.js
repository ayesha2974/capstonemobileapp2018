import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import { Constants } from 'expo';
import ModalDropdown from 'react-native-modal-dropdown';
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";


export default class NavInstructor extends React.Component {

    render() {
 
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <View style={styles.container1}>
                        <View>
                            <TouchableOpacity onPress={() => alert('Logout')}>
                                <Image style={styles.image} source={require('./panda.jpeg')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.userBox}>
                            <Text style={styles.textStyle}>Instructor Name</Text>
                            <Text style={styles.textStyle}>60087635</Text>
                            <TouchableOpacity>
                                <Text style={styles.textStyle}>My Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textStyle}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text>Current Course</Text>
                    </View>

                    <View>
                        <Text>Previous Course</Text>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white'
    },
    navbar: {
        backgroundColor: '#76323f',
        width: 300,
        height: '100%',
        flexDirection: 'column'
    },
    container1: {
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        height: 125
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: 10
    },
    textStyle: {
        color: 'white',
        fontSize: 18,
        letterSpacing: 1,
    },
    userBox: {
        margin: 10
    }

});
