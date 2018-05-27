
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Bar from 'react-native-bar-collapsible';
import CheckBox from 'react-native-checkbox';
import ModalDropdown from 'react-native-modal-dropdown';
import p1 from './Images/p1.png';


export default class Test2 extends React.Component {
    render() {
        return (
            <ScrollView> 
            <View style={styles.container}> 
              
                <Bar style={styles.bar}
                    title='PROFILE INFO'
                    collapsible={true}
                    showOnStart={false}
                    iconCollapsed='chevron-right'
                    iconOpened='chevron-down'>
                    <View style={styles.profileContainer}>
                        <Image style={styles.img} source={require('./Images/p1.png')} />
                        <Text style={styles.imglabel}> Edit Image  </Text>
                        <View style={styles.inline}>
                            <Text style={styles.titles}> Name  </Text>
                            <View style={styles.nametxtview}>
                                <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='Edit Name' />
                            </View>
                        </View>
                        <View style={styles.inline}>
                            <Text style={styles.titles}> Email  </Text>
                            <View style={styles.emailtxtview}>
                                <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='Edit Email' />
                            </View>
                        </View>
                        <View style={styles.inline}>
                            <Text style={styles.titles}> Phone  </Text>
                            <View style={styles.phonetxtview}>
                                <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='Edit Phone' />
                            </View>
                        </View>
                        <View style={styles.inline}>
                            <Text style={styles.titles}> DOB  </Text>
                            <View style={styles.DOBtxtview}>
                                <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='Edit Date of Birth' />
                            </View>
                        </View>

                        {/* <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonsText}>Save</Text>
                        </TouchableOpacity> */}
                    </View>
                </Bar>
                <Bar style={styles.bar}
                    title='ACCESS POLICY'
                    collapsible={true}
                    showOnStart={false}
                    iconCollapsed='chevron-right'
                    iconOpened='chevron-down'
                >
                    <View style={styles.policyContainer}>
                        <CheckBox
                            label='I agree to the Terms and Conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                        <CheckBox
                            label='I agree to the Terms and Conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                        <CheckBox
                            label='I agree to the Terms and Conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                        <CheckBox
                            label='I agree to the Terms and Conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                    </View>
                </Bar>
                <Bar style={styles.bar}
                    title='AUDIT'
                    collapsible={true}
                    showOnStart={false}
                    iconCollapsed='chevron-right'
                    iconOpened='chevron-down'
                >
                    <View style={styles.auditContainer}>
                        <CheckBox
                            label='I agree to the Terms and Conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                        <CheckBox
                            label='I agree to the Terms and Conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                        <CheckBox
                            label='I agree to the Terms and Conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                        <CheckBox
                            label='I agree to the Terms and Conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />

                        {/* <ModalDropdown
                            style={styles.dropdowns}
                            options={['Instructor', 'Admin']}
                            textStyle={{ fontSize: 20 }}
                            dropdownTextStyle={{ fontSize: 20 }}
                        /> */}
                    </View>
                </Bar>
                <Bar style={styles.bar}
                    title='SET UP'
                    collapsible={true}
                    showOnStart={false}
                    iconCollapsed='chevron-right'
                    iconOpened='chevron-down'
                >
                    <View style={styles.setupContiner}>
                        <CheckBox
                            label='I agree to the Terms and Conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                        <CheckBox
                            label='I agree to the Terms and Conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                        <CheckBox
                            label='I agree to the Terms and Conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                        <CheckBox
                            label='I agree to the Terms and Conditions'
                            checked={true}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />

                    </View>
                </Bar>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonsText}>Save</Text>
                </TouchableOpacity>
              
            </View>
            </ScrollView> 
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // backgroundColor: '#e9e9e9',
        // justifyContent:'center',s
        // width: "100%",
        // height: "100%",
        // alignItems: 'center',
        // padding: 16,
        paddingTop: 23
    },
    bar:{
        backgroundColor:'#76323f'
    },
    
    profileContainer:{
        marginLeft:180,
        marginTop:20,
        marginBottom:20
    },
    policyContainer:{
        marginLeft:218,
        marginTop:20, 
        marginBottom:20
    },
    auditContainer:{
        marginLeft:218,
        marginTop:20
    },
    setupContiner:{
        marginLeft:218,
        marginTop:20
    },
    inline: {
        flexDirection: 'row',
        width: '15%',
        marginRight: 640,
        marginLeft: 20
        // marginBottom:'50%'
    },
    titles: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 7,
        height: 40
    },
    inputfeilds: {
        backgroundColor: '#e9e9e9',
        height: 40,
        width: 200,
        marginLeft: 1
    },
    nametxtview: {
        marginLeft: 20
    },
    emailtxtview: {
        marginLeft: 21
    },
    phonetxtview: {
        marginLeft: 15
    },
    DOBtxtview: {
        marginLeft: 31
    },
    button: {
        alignItems: 'center',
        backgroundColor: "#76323f",
        padding: 10,
        marginTop: 10,
        width: 100,
        borderRadius: 35,
        marginLeft: 320,
        height: 40,
        marginBottom: 10
    },

    buttonsText: {
        color: 'white',
        fontSize: 15,
        paddingBottom: 13
    },
    checkboxView: {
        marginLeft: 200,
        marginTop: 20,
        marginBottom: 10
    },
    policybutton: {
        alignItems: 'center',
        backgroundColor: "#76323f",
        padding: 10,
        marginTop: 10,
        width: 100,
        borderRadius: 35,
        marginLeft: 118,
        height: 40,
        marginBottom: 10
    },
    dropdowns: {
        borderColor: 'black',
        backgroundColor: 'white',
        height: 35,
        width: 220,
        marginLeft: 40,
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 20
    },
    img: {
        borderRadius: 150,
        marginLeft: 130,
        height: 130,
        width: 130
    },
    imglabel: {
        marginLeft: 155,
        marginBottom: 25,
        marginTop: 5, 
        fontSize:18,
        color: "#76323f"
    }

})
