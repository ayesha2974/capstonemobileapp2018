import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import Logo from './logo.png';
import { LinearGradient } from 'expo'
import NavAdmin from './NavAdmin'
import EnrollStudent from './EnrollStudent'
import Chat from './Chat'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Constants } from 'expo';


export default class Admin extends React.Component {


    render() {

        return (
            <View>
                <View style={styles.container} >
                    <View>
                        <NavAdmin />
                    </View>
                    <View>
                        <EnrollStudent />
                    </View>
                    <View>
                        <Chat />
                    </View>

                </View>
            </View>

            // <View>
            //     <View style={styles.container} >
            //         <View>
            //             <NavAdmin />
            //         </View>
            //         <View>
            //             <EnrollStudent />
            //         </View>
            //         <View>
            //             <Chat />
            //         </View>

            //     </View>
            // </View>

            // <View>
            //     <View style={styles.container} >
            //         <View>
            //             <NavAdmin />
            //         </View>
            //         <View>
            //             <EnrollStudent />
            //         </View>
            //         <View>
            //             <Chat />
            //         </View>

            //     </View>
            // </View>// <View>
            //     <View style={styles.container} >
            //         <View>
            //             <NavAdmin />
            //         </View>
            //         <View>
            //             <EnrollStudent />
            //         </View>
            //         <View>
            //             <Chat />
            //         </View>

            //     </View>
            // </View>// <View>
            //     <View style={styles.container} >
            //         <View>
            //             <NavAdmin />
            //         </View>
            //         <View>
            //             <EnrollStudent />
            //         </View>
            //         <View>
            //             <Chat />
            //         </View>

            //     </View>
            // </View>// <View>
            //     <View style={styles.container} >
            //         <View>
            //             <NavAdmin />
            //         </View>
            //         <View>
            //             <EnrollStudent />
            //         </View>
            //         <View>
            //             <Chat />
            //         </View>

            //     </View>
            // </View>// <View>
            //     <View style={styles.container} >
            //         <View>
            //             <NavAdmin />
            //         </View>
            //         <View>
            //             <EnrollStudent />
            //         </View>
            //         <View>
            //             <Chat />
            //         </View>

            //     </View>
            // </View>


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
        flexDirection: 'row',
        // paddingTop: Constants.statusBarHeight,
    },



});
