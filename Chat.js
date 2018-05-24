import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import { Constants } from 'expo';
import ModalDropdown from 'react-native-modal-dropdown';
import { Input, Icon, Item, Textarea } from "native-base";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Chat extends React.Component {
    handleScroll(event) {
        console.log(event.nativeEvent.contentOffset.y);
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.chat}>
                    <ScrollView>
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
                        <View style={{ height: 150 }}>
                            <ScrollView onScroll={this.handleScroll}>
                                <View style={styles.contacts}>
                                    <View>
                                        <Image style={styles.image} source={require('./panda.jpeg')} />
                                    </View>
                                    <View>
                                        <Text style={styles.contactName}>Helen</Text>
                                    </View>
                                    <View>
                                        <View style={styles.status}>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.contacts}>
                                    <View>
                                        <Image style={styles.image} source={require('./panda.jpeg')} />
                                    </View>
                                    <View>
                                        <Text style={styles.contactName}>Helen</Text>
                                    </View>
                                    <View>
                                        <View style={styles.status}>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.contacts}>
                                    <View>
                                        <Image style={styles.image} source={require('./panda.jpeg')} />
                                    </View>
                                    <View>
                                        <Text style={styles.contactName}>Helen</Text>
                                    </View>
                                    <View>
                                        <View style={styles.status}>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        <Text style={styles.line}> </Text>

                        <View style={{ margin: 10 }}>
                            <Text style={styles.chatHead}>Group Chat</Text>
                            <View style={{ height: 150 }}>
                                <ScrollView>
                                    <View style={styles.contacts}>
                                        <View>
                                            <Image style={styles.image} source={require('./panda.jpeg')} />
                                        </View>
                                        <View>
                                            <Text style={styles.contactName}>Helen</Text>
                                        </View>

                                    </View>
                                    <View style={styles.contacts}>
                                        <View>
                                            <Image style={styles.image} source={require('./panda.jpeg')} />
                                        </View>
                                        <View>
                                            <Text style={styles.contactName}>Helen</Text>
                                        </View>

                                    </View>
                                    <View style={styles.contacts}>
                                        <View>
                                            <Image style={styles.image} source={require('./panda.jpeg')} />
                                        </View>
                                        <View>
                                            <Text style={styles.contactName}>Helen</Text>
                                        </View>

                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                        <View style={styles.chatPage}>
                            <View style={styles.contacts2}>
                                <View>
                                    <Image style={styles.image} source={require('./panda.jpeg')} />
                                </View>
                                <View>
                                    <Text style={styles.contactName2}>Helen</Text>
                                </View>
                                <View>
                                    <View style={styles.status2}>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.message}>
                                <View style={}>
                                    <View>
                                        <Image style={styles.image} source={require('./panda.jpeg')} />
                                    </View>
                                    <View style={styles.msgFrom}>

                                    </View>
                                    
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <View>
                                    <SimpleLineIcons name="emotsmile" size={30} style={{ color: '#76323f', }} />
                                </View>
                                <View>
                                    <Textarea placeholder="Enter Message" style={{ backgroundColor: 'white', width: 285, marginRight: 10, marginLeft: 10 }} />
                                </View>
                                <View>
                                    <Ionicons name="md-send" size={30} style={{ color: '#76323f', }} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
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
        alignSelf: 'flex-end',
        padding: 10
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
        marginLeft: 20

    },
    contacts: {
        flexDirection: 'row',
    },
    contacts2: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#76323f',
    },
    contactName: {
        color: 'white',
        fontSize: 18,
        letterSpacing: 1,
        paddingTop: 18
    },
    contactName2: {
        color: '#76323f',
        fontSize: 18,
        letterSpacing: 1,
        paddingTop: 18
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 10
    },
    status: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgb(45, 233, 45)',
        marginLeft: 230,
        marginTop: 25,
    },
    status2: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgb(45, 233, 45)',
        marginTop: 25,
        marginLeft: 20,
    },
    line: {
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    line2: {
        borderBottomWidth: 1,
        borderColor: '#76323f',
    },
    chatPage: {
        marginTop: 10,
        width: 380,
        height: 500,
        borderRadius: 10,
        backgroundColor: '#e9e9e9',

    },
    message: {
        width: 380,
        height: 350,
        backgroundColor: 'white'

    },
    msgFrom: {
        width: 100,
        height: 50,
        backgroundColor:'#e9e9e9'
    }

});
