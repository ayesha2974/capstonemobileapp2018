
import React, { Component } from 'react';
import { Container, Header, Content, Button, Form, Item, Left, Right, Input, Body, Title, ListItem } from 'native-base';
import { AppRegistry, Text, CheckBox, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class Instructor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: [' Course  ', 'Type', 'Work', 'Start', 'Due', 'End', 'Submitted', 'New'],
            widthArr: [90, 90, 90, 90, 90, 90, 90, 90],
            tableData: [
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1']
            ],


            tableHead2: [' Name ', 'Student Id', 'Time', 'Files', 'Work Grade', 'Course Grade', 'GPA'],
            widthArr2: [103, 103, 103, 103, 103, 103, 103],
            tableData2: [
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
            ]
        }
    }

    render() {
        const state = this.state;

        return (
            <View style={styles.container}>
                <View>
                    <ScrollView horizontal={true}>
                        <View >
                            <Text style={styles.header2}>Course Works </Text>
                            <Table borderStyle={{ borderColor: 'whitesmoke' }} >
                                <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.htext} />
                            </Table>
                            <ScrollView style={styles.dataWrapper}>
                                <Table borderStyle={{ borderColor: 'whitesmoke' }}>
                                    {
                                        <Rows widthArr={state.widthArr} data={state.tableData} style={styles.row}
                                            textStyle={styles.text} />
                                    }
                                </Table>
                            </ScrollView>
                        </View>

                    </ScrollView>
                    {/* SECOND TABLE */}
                    <ScrollView horizontal={true} style={{ paddingTop: 30 }}>
                        <View>
                            <Text style={styles.header2}>Work Submitted </Text>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <CheckBox
                                        value={this.state.checked}
                                        onValueChange={() => this.setState({ checked: !this.state.checked })}
                                    />
                                    <Text style={{ marginTop: 5 }}>Show All Students</Text>
                                </View>
                            </View>
                            <Table borderStyle={{ borderColor: 'whitesmoke' }} >
                                <Row data={state.tableHead2} widthArr={state.widthArr2} style={styles.header} textStyle={styles.htext} />
                            </Table>
                            <ScrollView style={styles.dataWrapper}>
                                <Table borderStyle={{ borderColor: 'whitesmoke' }}>
                                    {
                                        <Rows widthArr={state.widthArr2} data={state.tableData2} style={styles.row}
                                            textStyle={styles.text} />
                                    }
                                </Table>
                            </ScrollView>

                        </View>
                    </ScrollView>
                </View>
                <View style={styles.inline} >
                    <Text style={styles.header2}>Work details </Text>
                    <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='Quizaaaaaaaaaaaaaaa One' />
                    <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='13/5/2018' />
                    <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='19/5/2018' />
                    <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='20/5/2018' />
                </View>
                {/*<ListItem> <Text>Ali Connors</Text> </ListItem> </View> */}

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 100,
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header: {
        height: 50,
        backgroundColor: '#76323f',
        width: "100%"
    },
    htext: {

        fontWeight: 'bold',
        alignSelf: "center",
        color: 'white'
    },
    text: {
        alignItems: 'center',
    },

    text: { textAlign: 'center' },

    dataWrapper: {
        marginTop: -1
    },
    row: {
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',

    },
    header2: {
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 10,
        fontSize: 20,
        justifyContent: 'space-between'
    },
    inputfeilds: {
        backgroundColor: 'white',
        height: 40,
        borderColor: 'blue',
        borderWidth: 1,

    },
    workdetails: {
        height: "100%",
        width: "100%"
    },

    inline: {
        flexDirection: 'row',
        marginRight: 200,
        marginLeft: 200,
        alignItems: 'center',
    }
});