
import React, { Component } from 'react';
import { Container, Header, Content, Button, Left, Right, Body, Title } from 'native-base';
import { AppRegistry, Text, ListItem, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class Instructor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: [' Course  ', 'Type', 'Work', 'Start', 'Due', 'End', 'Submitted', 'New'],
            widthArr: [150, 150, 150, 150, 150, 150, 150, 150,],
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
                ['CP1880-1', 'Lab', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1']
            ]
        }
    }

    render() {
        const state = this.state;


        return (
            <View style={styles.container}>
                <ScrollView horizontal={true}>
                    <View>

                        <Table borderStyle={{ borderColor: 'whitesmoke' }} >
                            <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.htext} />
                        </Table>
                        <ScrollView style={styles.dataWrapper}>
                            <Table borderStyle={{ borderColor: 'whitesmoke' }}>
                                {
                                    <Rows data={state.tableData} style={styles.row}
                                        textStyle={styles.text} />
                                }
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        width: "100%",
        height: "100%", backgroundColor: 'white'
    },
    header: { height: 50, backgroundColor: '#76323f', width: "100%" },
    htext: { textAlign: 'center', fontWeight: 'bold', color: 'white' },
    btext: { textAlign: 'center', fontWeight: '100', color: 'black', width: "100%" },
    dataWrapper: { marginTop: -1 },
    row: {
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',
    }
});
// const styles = StyleSheet.create({

//     header: {
//         backgroundColor: '#E9E9E9',
//         width: "100%",
//         height: "8%",
//         // marginTop: 10,

//         alignItems: 'center',
//         alignSelf: "center",
//         justifyContent: 'center',
//     },
//     img: {

//         width: 200,
//         height: 100,
//         marginBottom: 20,
//         resizeMode: "contain"
//     },
//     container: {
//         backgroundColor: 'white',
//         width: "100%",
//         height: "100%",
//         alignItems: 'center',
//         alignSelf: "center",
//         justifyContent: 'center',
//     },
//     container2: { flex: 1,  height: "100%",backgroundColor: 'red' },
//     head: { height: 40, backgroundColor: 'green' },
//     text: { margin: 6 }


// })