import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView, Picker } from 'react-native';
import React from 'react';
import Logo from './logo.png'
import { Container, Header, Content, Form, Item, Input, Label, Button, Right } from 'native-base';
import ModalDropdown from 'react-native-modal-dropdown';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



export default class FaculyList extends React.Component {


    render() {
        return (

            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    {/* <View style={styles.box} >
                        <Image source={require('./logo.png')} style={styles.pic} />

                    </View> */}
                    <View style={styles.inline}>
                        <Text style={{ marginTop: 10, fontSize: 20 }}>College ID  </Text>
                        <TextInput underlineColorAndroid='transparent' style={{ borderColor: 'gray', width: 120, backgroundColor: 'white', height: 40, justifyContent: 'center' }} placeholder='        College ID' />
                        <Text style={{ marginTop: 10, fontSize: 20, marginLeft: 15, height: 40 }}>Department </Text>

                        {/* <Picker style={{width: 237}}>
                    <Picker.Item label="Information Technology " value="jsaaa" />
                                    <Picker.Item label="Engineering" value="java" />
                                    <Picker.Item label="Health Science" value="js" />
                          
                    </Picker> */}
                        <ModalDropdown
                            style={{ borderColor: 'black', backgroundColor: 'white', height: 40, width: 300, marginRight: 30, paddingLeft: 10 }}
                            options={['Information Technology', 'Health Sicence']}
                            textStyle={{ fontSize: 20 }}
                            dropdownTextStyle={{ fontSize: 20 }}
                        />
                        <Text style={{ marginTop: 10, fontSize: 20, marginLeft: 15, height: 40 }}>Role  </Text>

                        <ModalDropdown
                            style={{ borderColor: 'black', backgroundColor: 'white', height: 40, width: 300, marginRight: 30, paddingLeft: 10 }}
                            options={['Information Technology', 'Health Sicence']}
                            textStyle={{ fontSize: 20 }}
                            dropdownTextStyle={{ fontSize: 20 }}
                        />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonsText}>Search </Text>
                        </TouchableOpacity>

                        {/* <View >
                            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                                <Row value={['COLLEGE ID','NAME', 'CONTACT NO', 'PERSINAL EMAIL', 'COLLEGE EMAIL', 'DEPARTMENT', 'ROLE']} style={styles.head} Style={styles.text} />
                                <Rows value={[6000554, 'NAKKJHG','SHH',4545,]} Style={styles.text} />
                                <Rows value={[6000554, 'NAKKJHG','SHH',4545,]} Style={styles.text} />
                                <Rows value={[6000554, 'NAKKJHG','SHH',4545,]} Style={styles.text} />
                            </Table>
                        </View> */}
                        {/* <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View  style={{ width: 50, height: 50 }}/>  
                            <View style={{ width: 50, height: 50 }} />
                            <View style={{ width: 50, height: 50 }} />
                        </View> */}
                        {/* <View >
                            <Label >College ID </Label>
                            <Input style={styles.inputfeilds} placeholder='Username.Password' />
                        </View> */}
                        {/* <View>
                            <Label>Department </Label>
                            <Item >
                                <Picker style={{ height: 50, width: 100 }}>
                                    <Picker.Item label="a" value="java" />
                                    <Picker.Item label="b" value="js" />
                                </Picker>
                            </Item>
                        </View>
                        <View>
                            <Label>Role </Label>
                            <Item >
                                <Picker style={{ height: 50, width: 100 }} >
                                    <Picker.Item label="a" value="java" />
                                    <Picker.Item label="b" value="js" />
                                </Picker>
                            </Item>
                        </View> */}
                    </View>
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
        flex: 1, padding: 16, 
        paddingTop: 30, 
       

    },

    pic: {
        width: 180,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },


    inputfeilds: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'left',
        width: 200,
        borderWidth: 1,
        color: 'black',
        // marginTop: 10,
        height: 20,
        // marginBottom: "5%",
        // marginLeft: "1%",
        backgroundColor: 'white',
        // borderColor: 'blue',
        // borderWidth: 1,
        fontSize: 20,
    },

    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#76323f',
        width: 400,
        marginTop: 25,

    },

    inline: {
        // flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    lbl1: {
        marginRight: 50,
        marginLeft: 50,
    },

    button: {
        alignItems: 'center',
        backgroundColor: "#76323f",
        padding: 2,
        marginTop: 2,
        width: 100,
        // fontSize: 30,
        borderRadius: 20,
    },
    buttons: {
        marginTop: 5,
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

  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }

});
