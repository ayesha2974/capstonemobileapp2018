import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import { Constants } from 'expo';
import ModalDropdown from 'react-native-modal-dropdown';
import { Input, Icon, Item } from "native-base";


export default class Chat extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.chat}>
                    <View style={{ flexDirection: 'row', margin: 10 }}>
                        <View>
                            <Text style={styles.chatHead}>Chat</Text>
                        </View>
                        <View>
                            <Item rounded style={styles.searchBox}>
                                <Input underlineColorAndroid="transparent" />
                                <Icon active name='search' />
                            </Item>
                        </View>
                    </View>

                    <View>

                    </View>

                    <View>

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
        backgroundColor: 'white',
    },
    chat: {
        backgroundColor: '#76323f',
        width: 400,
        height: '100%',
        flexDirection: 'column',
        alignSelf: 'flex-end'
    },
    chatHead: {
        color: 'white',
        fontSize: 24,
        margin: 10
    },
    searchBox: {
        backgroundColor: 'white',
        padding: 5,
        width: 270,
        height: 50,
        marginLeft: 30
        
    }
    // chatContainer: {
    //     flexDirection: 'row',
    //     borderBottomColor: 'white',
    //     borderBottomWidth: 1,
    //     height: 125,
    // },
    // image: {
    //     height: 100,
    //     width: 100,
    //     borderRadius: 50,
    //     margin: 10
    // },
    // textStyle: {
    //     color: 'white',
    //     fontSize: 18,
    //     letterSpacing: 1,
    // },
    // userBox: {
    //     margin: 10
    // }

});
