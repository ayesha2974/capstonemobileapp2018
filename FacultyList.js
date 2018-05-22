import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView, Picker } from 'react-native';
import React from 'react';
import Logo from './logo.png'
import { Container, Header, Content, Form, Item, Input, Label, Button, Right } from 'native-base';
import ModalDropdown from 'react-native-modal-dropdown';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class FacultyList extends React.Component {

    render() {
        return (

            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    {/* <View style={styles.box} >
                        <Image source={require('./logo.png')} style={styles.pic} />

                    </View> */}
                    <View style={styles.inline}>
                        <Text style={styles.titles}> College ID  </Text>
                        <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='College ID' />
                        <Text style={styles.titles}>Department </Text>
                        <ModalDropdown
                            style={styles.dropdowns}
                            options={['Information Technology', 'Health Sicence']}
                            textStyle={{ fontSize: 18 }}
                            dropdownTextStyle={{ fontSize: 20 }}
                        />
                        <Text style={styles.titles}>Role  </Text>
                        <ModalDropdown
                            style={styles.dropdowns}
                            options={['Information Technology', 'Health Sicence']}
                            textStyle={{ fontSize: 20 }}
                            dropdownTextStyle={{ fontSize: 20 }}
                        />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonsText}>Search </Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View >
                            <Table borderStyle={{ width: 1000, borderColor: '#c8e1ff',height: 1000, }}>
                                <Row value={['COLLEGE ID','NAME', 'CONTACT NO', 'PERSINAL EMAIL', 'COLLEGE EMAIL', 'DEPARTMENT', 'ROLE']} style={styles.head} Style={styles.text} />
                                <Rows value={[6000554, 'NAKKJHG','SHH',4545,]} Style={styles.text} />
                                <Rows value={[6000554, 'NAKKJHG','SHH',4545,]} Style={styles.text} />
                                <Rows value={[6000554, 'NAKKJHG','SHH',4545,]} Style={styles.text} />
                            </Table>
                        </View> 
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View  style={{ width: 50, height: 50 }}/>  
                            <View style={{ width: 50, height: 50 }} />
                            <View style={{ width: 50, height: 50 }} />
                        </View>  */}
                    <View>
                        <View style={styles.tableInline}>
                            <Text style={styles.tabletitles}>Name </Text>
                            <Text style={styles.tabletitles}>Contaact NO </Text>
                            <Text style={styles.tabletitles}>Personal Email </Text>
                            <Text style={styles.tabletitles}>College Email </Text>
                            <Text style={styles.tabletitles}>Department </Text>
                            <Text style={styles.tabletitles}>Role</Text>
                        </View>
                    </View>

                        <View style={styles.tablebody}>
                        {/* <Text>hhh</Text> */}
                            <Text style={styles.tabletitles}>Nalin </Text>
                            <Text style={styles.tabletitles}>77666655 </Text>
                            <Text style={styles.tabletitles}>nalin@nalin.com </Text>
                            <Text style={styles.tabletitles}>6001111@cna-qatar </Text>
                            <Text style={styles.tabletitles}>Information T </Text>
                            <Text style={styles.tabletitles}>IT</Text>
                            <Text style={styles.tabletitles}>edit</Text>
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
        padding: 16,
        paddingTop: 30,
    },
    pic: {
        width: 180,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },


    inputfeilds: {
        backgroundColor: 'white', height: 40, width: 80
    },

    inline: {
        flexDirection: 'row',
        width: '30%',
        marginRight: 535,
        // marginBottom:'50%'
    },
    tableInline: {
        backgroundColor: "#76323f", height: 60, width: 700, flexDirection: 'row',
        // width: '30%',
        marginLeft: 100,
        marginRight: 110,
    },
    button: {
        backgroundColor: "#76323f",
        width: 80,
        height: 35,
        borderRadius: 20,
        marginLeft: 5,
        marginRight: 100,
    },
    buttonsText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 4,
        paddingLeft: 1
        // padding: 3,
    },

    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6, color: 'black' },

    titles: {
        marginTop: 10, fontSize: 18, fontWeight: 'bold', fontSize: 18, marginLeft: 7, height: 40
    },
    tabletitles: {
        marginTop: 10, fontSize: 18, fontWeight: 'bold', fontSize: 18, marginLeft: 7, height: 40, color: 'white'
    },
    dropdowns: {
        borderColor: 'black', backgroundColor: 'white', height: 40, width: 150, marginLeft: 5, paddingLeft: 10
    }
    ,
    tablebody: {
        backgroundColor: "green", height: 500, width: 700,  marginLeft: 100,
        marginRight: 110,  marginTop: 10, flexDirection: 'row'
    },
});
