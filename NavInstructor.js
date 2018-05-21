import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import { Constants } from 'expo';


export default class NavInstructor extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.navbar}>

                </View>
            </View>


        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
    navbar: {
    }

});
