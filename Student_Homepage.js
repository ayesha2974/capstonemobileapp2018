import React, { Component } from 'react';
import { Container, Header, Content, Button, Form, Item, Left, Right, Input, Body, Titl, List, ListItem } from 'native-base';
import { AppRegistry, Text, CheckBox, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import StudentExam from './StudentExam';

import NavInstructor from './NavInstructor';

import Bar from 'react-native-bar-collapsible';


export default class Student_Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            tableHead: [' Course  ', 'Type', 'Work', 'Start', 'Due', 'End', 'Submitted', 'Grade'],
            widthArr1: [92, 120, 92, 92, 92, 92, 92, 92],

            tableData: [
                ['CP1880-2', 'Assignment', 'Assignment  Two', 'Sep 05', '-', 'Dec 07', '5', '78%'],
                ['CP2780-2', 'Quiz', 'Quiz Five', 'OCT 05', 'OCT 15', 'Dec 07', '6', '95%'],
                ['CP1810-1', 'Test', 'Test One', 'Sep 3', '-', 'Dec 03', '1', '69%'],
                ['CP2700-3', 'Project_1', 'part One', 'Sep 05', '-', 'OCT 08', '2',  '73%'],
                ['CM1400-2', 'Lab', 'Lab Five', 'Nov 05', 'Nov 15', 'Nov 17', '4', '85%'],
                // ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', 'Sep 25', 'Dec 07', '3', '75'],
                // ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', 'Sep 25', 'Dec 07', '4', '67%'],
                // ['CP3450-1', 'Quiz Five', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '100%'],
                // ['CP3450-1', 'Quiz Five', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '100%'],
                // ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', 'Sep 15', 'Dec 07', '5', '100%'],
                // ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '67%'],
                // ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', 'Sep 15', 'Dec 07', '5', '100%'],
                // ['CP1880-1', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '67%'],
                // ['CP1880-1', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '3', '75'],
                // ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '3',  '85%'],
                // ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '87%'],
                // ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', 'Sep 15', 'Dec 07', '5', '100%'],
                // ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '67%'],
                // ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', 'Sep 15', 'Dec 07', '5', '100%'],
                // ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '100%'],
                // ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '3', '75'],
                // ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '60'],
                // ['CP1880-1', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '60'],
                // ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', 'Sep 25', 'Dec 07', '4', '87%'],
                // ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', 'Sep 25', 'Dec 07', '3', '55%'],
                // ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', 'Sep 25', 'Dec 07', '4', '87%'],
                // ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', 'Sep 25', 'Dec 07', '3',  '85%'],
                // ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '87%'],
                // ['CP2870-2', 'Lab Two', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '47%'],
                // ['CP1880-1', 'Lab Two', 'CIS', 'Sep 05', '-', 'Dec 07', '3', '55%'],
                // ['CP1880-1', 'Lab Two', 'CIS', 'Sep 05', '-', 'Dec 07', '3', '8', '85%'],
                // ['CP1880-1', 'Lab Two', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '87%'],
                // ['CP1880-1', 'Lab Two', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '3', '8'],
                // ['CP1880-1', 'Lab Two', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '5', '85%'],
                // ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '3', '55%'],
                // ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '85%'],
                // ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '3', '8'],
                // ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '3', '8'],
                // ['CP1880-1', 'Test Two', 'CIS', 'Sep 05', '-', 'Dec 07', '3', '79%'],
                // ['CP1880-1', 'Test Two', 'CIS', 'Sep 05', '-', 'Dec 07', '3', '79%'],
                // ['CP2700-2', 'Test Two', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '3', '49%'],
                // ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '67%'],
                // ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', 'Sep 15', 'Dec 07', '5', '100%'],
                // ['CP1880-1', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '67%'],
                // ['CP1880-1', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '3', '75'],
                // ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '3',  '85%'],
                // ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '87%'],
                // ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', 'Sep 15', 'Dec 07', '5', '100%'],
                // ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '67%'],
                // ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', 'Sep 15', 'Dec 07', '5', '100%'],
                // ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '100%'],
                // ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '3', '75'],
                // ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '4', '60'],
                // ['CP2700-2', 'Test Two', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '3', '79%'],
                // ['CP2700-2', 'Test Two', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '5', '85%'],
                // ['CP2700-2', 'Test Two', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '3', '55%'],
                // ['CP2700-2', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '3', '49%'],
                // ['CP2700-2', 'Assignment One', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '6', '49%'],
                // ['CP2700-2', 'Test One', 'CIS', 'Sep 05', '-', 'Dec 07', '3', '55%'],
                // ['CP1880-1', 'Test One', 'CIS', 'Sep 05', '-', 'Dec 07', '6', '49%'],
                // ['CP1880-1', 'Test One', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '5', '85%'],
                // ['CP1880-1', 'Test One', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '3', '55%'],
                // ['CP1880-1', 'Test One', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '6', '49%'],
                // ['CP2700-2', 'Assignment One', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '5', '85%'],
                // ['CP2700-2', 'Assignment One', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '3', '55%'],
                // ['CP2700-2', 'Assignment One', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '6', '49%'],
                // ['CP2700-2', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '85%'],
                // ['CP1880-1', 'Test One', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '5', '85%'],
                // ['CP1880-1', 'Test One', 'CIS', 'Sep 05', '-', 'Dec 07', '3', '55%'],
                // ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '6', '49%'],
                // ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', 'Sep 13', 'Dec 07', '6', '49%'],
                // ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '85%'],


            ],


            tableHead2: ['File Name','Time', 'Grade', 'Course Average'],
            widthArr2: [191,191, 191, 191],


            tableData2: [
                ['Assignment One' ,'Sep 20 16:20', '-', '30/60 50%'],
                ['Quiz Five' , 'Sep 13 12:20', '40 60%', '40/60 70%'],
                ['Project_1: part One' , 'Sep 40 16:20', '30 60%', '60/60 100%'],
                ['Test Two' ,'Sep 20 16:20', '-', '55/60 90%'],
                ['Lab Five' , 'Sep 13 12:20', '40 60%', '48.5/60 85%'],
                // ['Test Two' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Three' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['Test Two' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Three' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['Test Two' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Three' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['Test Two' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Three' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['Test Two' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Three' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Test Two' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Three' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['Test Two' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Five' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Test Two' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Five' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['Test Two' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Five' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['Test Two' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Five' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['lab four' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Five' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['lab four' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Two' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['lab four' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Two' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['lab four' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Two' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['lab four' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Two' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['lab four' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Two' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['lab four' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Two' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['lab four' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Two' , 'Sep 13 12:20', '40 60%', '40/60 100%'],
                // ['Assignment One' , 'Sep 40 16:20', '30 60%', '45/60 100%'],
                // ['lab four' ,'Sep 20 16:20', '-', '60/60 100%'],
                // ['Quiz Two' , 'Sep 13 12:20', '40 60%', '40/60 100%'],

            ]
        }
    }
    render() {
        const state = this.state;

        return (
            <ScrollView style={styles.dataWrapper}>

                <View style={{ paddingTop: 30 }}>
                    <Bar style={{ backgroundColor: 'white' }} titleStyle={{ fontSize: 24, color: 'black' }} collapsible={true} showOnStart={true}
                        iconCollapsed='chevron-right' iconOpened='chevron-down' tintColor='black' iconSize={20} title='Course Content' >
                        <View style={styles.tableone}>
                            <Table borderStyle={{ borderColor: 'white' }} >
                                <Row data={state.tableHead} widthArr={state.widthArr1} style={styles.header} textStyle={styles.htext} />
                            </Table>
                            <ScrollView style={styles.dataWrapper2}>
                                <Table borderStyle={{ borderColor: 'white' }}>
                                    {
                                        <Rows widthArr={state.widthArr1} data={state.tableData} style={styles.row}
                                            textStyle={styles.text} />
                                    }
                                </Table>
                            </ScrollView>
                        </View>
                    </Bar>
                    <Bar style={{ backgroundColor: 'white' }}
                        titleStyle={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}
                        collapsible={true}
                        showOnStart={true}
                        iconCollapsed='chevron-right'
                        iconOpened='chevron-down'
                        tintColor='black'
                        iconSize={20}
                        title='Work Submitted'
                    >

                        <View style={styles.tableone}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', paddingRight: 600  }}>
                                    {/* <CheckBox
                                        value={this.state.checked}
                                        onValueChange={() => this.setState({ checked: !this.state.checked })}
                                    /> */}
                                    
                                    {/* <Text style={{ marginTop: 5, marginLeft: 170, fontSize: 20 }}>Student Name:</Text>
                                    <Text style={{ marginTop: 11 , marginLeft: 10, fontSize: 15}}>Ayesha,</Text>
                                    <Text style={{ marginTop: 5, marginLeft: 100,fontSize: 20 }}>Student Number:</Text>
                                    <Text style={{ marginTop: 11, marginLeft: 10, fontSize: 15}}>60081924</Text> */}
                                </View>
                            </View>
                            <Table borderStyle={{ borderColor: 'white' }} >
                                <Row data={state.tableHead2} widthArr={state.widthArr2} style={styles.header} textStyle={styles.htext} />
                            </Table>
                            <ScrollView style={styles.dataWrapper2}>
                                <Table borderStyle={{ borderColor: 'white' }} >
                                    {
                                        <Rows widthArr={state.widthArr2} data={state.tableData2} style={styles.row}
                                            textStyle={styles.text} />
                                    }
                                </Table>
                            </ScrollView>

                        </View>
                    </Bar>
                    <View  >
                        <StudentExam />

                    </View>

                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 100,
        // backgroundColor: 'yellow',
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
        alignItems: 'center',
    },
    container2: {
        paddingTop: 50,
        paddingBottom: 100,
        // backgroundColor: 'olive',
        width: "100%",
        height: "100%",
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
        textAlign: 'center',
    },


    dataWrapper: {
        marginTop: -1
    },
    dataWrapper2: {
        marginTop: -1,
        height: 100,
    },
    row: {
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',

    },
    tableone: {
        paddingTop: 7,
        paddingBottom: 7,
        borderColor: '#E9E9E9',
        borderBottomWidth: 1.5,
        alignItems: 'center',
    },
    tabletwo: {
        borderColor: '#E9E9E9',
        borderBottomWidth: 1.5,
        //  alignItems: 'center',
    },

    header2: {
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 10,
        fontSize: 20,
        justifyContent: 'space-between'
    },
    inputfeilds: {
        textAlign: 'center',
        backgroundColor: 'white',
        height: 40,
        borderColor: '#c2c2c2',
        borderRadius: 4,
        borderWidth: 1.5,
        width: 100,
        color: '#f9f9f9',
        marginLeft: 10,

    },

    workdetails: {
        height: "100%",
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 30,
        flexDirection: 'column',
        paddingRight: 300,
        paddingLeft: 220,
    },
    workdetail_H: {
        height: "100%",
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 30,
        flexDirection: 'row',
        paddingRight: 300,
        paddingLeft: 500,
    },

    // barstyle:{
    //     backgroundColor: '#E9E9E9',
    //     fontWeight: 'bold',
    //     color: 'white'
    // }
});

