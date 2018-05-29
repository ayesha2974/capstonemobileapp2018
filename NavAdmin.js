import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView, } from 'react-native';
import React from 'react';
import { Constants } from 'expo';
import { CheckBox, Item, Input, Icon } from 'native-base';
import Bar from 'react-native-bar-collapsible';
export default class NavAdmin extends React.Component {
    state = { checked: true }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                         <View>
                            <Image style={styles.image} source={require('./panda.jpeg')} />
                        </View>
                    </TouchableOpacity>
                        <View style={{ marginTop: 25 }}>
                            <Text style={styles.text}>Admin Name</Text>
                            <Text style={styles.text}>60087633</Text>
                            <TouchableOpacity>
                                <Text style={styles.text}>My Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.text}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.line}> </Text>
                    <Text style={styles.text2}>
                        Faculty List
                    </Text>
                    <Text style={styles.line1}> </Text>
                    <Text style={styles.text2}>
                        Add Courses
                    </Text>
                    <Text style={styles.line1}> </Text>
                    <Text style={styles.text2}>
                        Enroll Students
                    </Text>
                    <Text style={styles.line1}> </Text>
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
        width: 250,
        height: '100%',
        flexDirection: 'column'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: 10
    },
    text: {
        fontSize: 18,
        letterSpacing: 1,
        color: 'white',
    },
    text2: {
        fontSize: 18,
        letterSpacing: 1,
        color: 'white',
        textAlign: 'center',
        marginTop:20
    },
    line: {
        borderBottomWidth: 1,
        borderColor: 'white',
        marginLeft: 20,
        marginBottom: 20,
        marginRight: 30,
    },
    line1: {
        borderBottomWidth: 1,
        borderColor: 'white',
        margin: 10,
        // marginRight: 30
    },
    icon: {
        color: 'white',
        fontSize: 30,
        marginLeft: 30,
        marginTop: 10,
    },
    text1: {
        paddingLeft: 15,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    icon1: {
        color: 'white',
        fontSize: 30,
        marginLeft: 60,
        marginTop: 30,
    },
    icon2: {
        color: 'white',
        fontSize: 30,
        marginLeft: 60,
    },
    arrow: {
        textAlign: 'right',
        fontSize: 50,
        marginRight: 20,
    },
    collaps: {
        marginLeft: 10,
        fontSize: 18,
        letterSpacing: 1,
        color: 'white',
        marginTop: 15,
        padding: 10
    },
    checkboxes: {
        flexDirection: 'row',
        marginLeft: 45,
        marginTop: 15,
        padding: 1
    },
    checkboxe1: {
        marginLeft: 18,
        marginTop: 30,
        padding: 1
    },
    checkboxe2: {

        marginLeft: 18,
        marginTop: 30,
        // padding: 1
    },
    collaps1: {
        marginLeft: 5,
        fontSize: 18,
        letterSpacing: 1,
        color: 'white',
        marginTop: 15,
        padding: 10
    },
    searchBox: {
        backgroundColor: 'white',
        padding: 5,
        width: 200,
        height: 50,
        marginTop: 10,
        marginLeft: 15,
    },
});