import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import { Constants } from 'expo';


export default class NavInstructor extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image style={styles.image} source={require('./panda.jpeg')} />
                        </View>
                        <View>
                            <Text>Instructor Name</Text>
                            <Text>60087635</Text>
                            <TouchableOpacity>
                                <Text>My Profile</Text>
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
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: 10
    },

});
