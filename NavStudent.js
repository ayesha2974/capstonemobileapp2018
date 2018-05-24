import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView, } from 'react-native';
import React from 'react';
import { Constants } from 'expo';
import { CheckBox, Item, Input, Icon } from 'native-base';
import Bar from 'react-native-bar-collapsible';


export default class NavStudent extends React.Component {

    state = { checked: true }
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.navbar}>

                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image style={styles.image} source={require('./panda.jpeg')} />
                        </View>
<<<<<<< HEAD
                        <View style={styles.userBox}>
=======
                        <View style={{ marginTop: 25 }}>
>>>>>>> a190c02d427ded015471475fdedab95be0d4f7f2
                            <Text style={styles.text}>Student Name</Text>
                            <Text style={styles.text}>60087633</Text>
                            <TouchableOpacity>
                                <Text style={styles.text}>My Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.text}>Logout</Text>
                            </TouchableOpacity>
                        </View>
<<<<<<< HEAD

=======
>>>>>>> a190c02d427ded015471475fdedab95be0d4f7f2
                    </View>




                    <Text style={styles.line}> </Text>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <Icon style={styles.icon} name='square-o' > */}
                        <CheckBox style={styles.checkboxe1} checked={this.state.allmoviechecked} color='black'
                            onPress={() => this.setState({ allmoviechecked: true, futuremoviechecked: false, watchedmoviechecked: false })} />
                        <Text style={styles.collaps1} > My Term Course </Text>

                        {/* </Icon> */}
                    </View>


                    <View style={{ height: 150 }}>
                        <ScrollView
                            horizontal={false}
                            pagingEnabled={false}
                            automaticallyAdjustInsets={true}
                        >
                            <View style={styles.checkboxes} >
                                {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                <CheckBox checked={this.state.allmoviechecked} color='black'
                                    onPress={() => this.setState({ allmoviechecked: true, futuremoviechecked: false, watchedmoviechecked: false })} />
                                <Text style={styles.text1} > CP1801 </Text>
                            </View>
                            <View style={styles.checkboxes} >
                                {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                <CheckBox checked={this.state.allmoviechecked} color='black'
                                    onPress={() => this.setState({ allmoviechecked: true, futuremoviechecked: false, watchedmoviechecked: false })} />
                                <Text style={styles.text1} > CP1820 </Text>
                            </View>
                            <View style={styles.checkboxes} >
                                {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                <CheckBox checked={this.state.allmoviechecked} color='black'
                                    onPress={() => this.setState({ allmoviechecked: true, futuremoviechecked: false, watchedmoviechecked: false })} />
                                <Text style={styles.text1} > CP1803 </Text>
                            </View>
                            <View style={styles.checkboxes} >
                                {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                <CheckBox checked={this.state.allmoviechecked} color='black'
                                    onPress={() => this.setState({ allmoviechecked: true, futuremoviechecked: false, watchedmoviechecked: false })} />
                                <Text style={styles.text1} > CP1850 </Text>
                            </View>
                        </ScrollView>
                    </View>


                    <Text style={styles.line}> </Text>
<<<<<<< HEAD
                    <View>
                        <Icon style={styles.icon} name='square-o' >
                            <Text style={styles.text} > My Term Course </Text>
                        </Icon>

                    </View>



                    <View>
                        <Icon style={styles.arrow} name='arrows-v' />
                        <Icon style={styles.icon1} name='square-o' >
                            <Text style={styles.text1} > CP1801 </Text>
                        </Icon>

                        <Icon style={styles.icon2} name='square-o' >
                            <Text style={styles.text1} > CP1820 </Text>
                        </Icon>

                        <Icon style={styles.icon2} name='square-o' >
                            <Text style={styles.text1} > CP1803 </Text>
                        </Icon>

                        <Icon style={styles.icon2} name='square-o' >
                            <Text style={styles.text1} > CP1850 </Text>
                        </Icon>
=======
                    <View style={{ flexDirection: 'row', }}>
                        {/* <Icon style={styles.icon} name='square-o' > */}
                        {/* <CheckBox style={styles.checkboxe1} checked={this.state.allmoviechecked} color='white'
                            onPress={() => this.setState({ allmoviechecked: true, futuremoviechecked: false, watchedmoviechecked: false })} /> */}


                        {/* <Text style={styles.collaps1} > My Previous Course </Text> */}


{/* 
                    </View>

                    <View> */}
                    <CheckBox style={styles.checkboxe2} checked={this.state.allmoviechecked} color='black'
                            onPress={() => this.setState({ allmoviechecked: true, futuremoviechecked: false, watchedmoviechecked: false })} />
                        <Bar
                        style={{ backgroundColor: '#76323f',marginLeft:10,width:230,marginTop:20,}}
                            title='My Previous Course'
                            collapsible={true}
                            showOnStart={true}
                            iconCollapsed='chevron-down'
                            iconOpened='chevron-up'
                            tintColor='white'
                            iconSize={20}
                             >



                            <View>
                                <Item rounded style={styles.searchBox}>
                                    <Input underlineColorAndroid="transparent" />
                                    <Icon active name='search' />
                                </Item>
                            </View>

                            <View style={{ height: 150 }}>
                                <ScrollView
                                    horizontal={false}
                                    pagingEnabled={false}
                                    automaticallyAdjustInsets={true}
                                >
                                    <View style={styles.checkboxes} >
                                        {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                        <CheckBox checked={this.state.allmoviechecked} color='white'
                                            onPress={() => this.setState({ allmoviechecked: true, futuremoviechecked: false, watchedmoviechecked: false })} />
                                        <Text style={styles.text1} > CP1801 </Text>
                                    </View>
                                    <View style={styles.checkboxes} >
                                        {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                        <CheckBox checked={this.state.allmoviechecked} color='white'
                                            onPress={() => this.setState({ allmoviechecked: true, futuremoviechecked: false, watchedmoviechecked: false })} />
                                        <Text style={styles.text1} > CP1820 </Text>
                                    </View>
                                    <View style={styles.checkboxes} >
                                        {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                        <CheckBox checked={this.state.allmoviechecked} color='white'
                                            onPress={() => this.setState({ allmoviechecked: true, futuremoviechecked: false, watchedmoviechecked: false })} />
                                        <Text style={styles.text1} > CP1803 </Text>
                                    </View>
                                    <View style={styles.checkboxes} >
                                        {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                        <CheckBox checked={this.state.allmoviechecked} color='white'
                                            onPress={() => this.setState({ allmoviechecked: true, futuremoviechecked: false, watchedmoviechecked: false })} />
                                        <Text style={styles.text1} > CP1850 </Text>
                                    </View>
                                </ScrollView>
                            </View>



                        </Bar>





>>>>>>> a190c02d427ded015471475fdedab95be0d4f7f2
                    </View>
                    <Text style={styles.line}> </Text>
                    <View>
                        <Icon style={styles.icon} name='square-o' >
                            <Text style={styles.text} > My Term Course </Text>
                        </Icon>

                    </View>



<<<<<<< HEAD
                    <View>
                        <Icon style={styles.arrow} name='arrows-v' />
                        <Icon style={styles.icon1} name='square-o' >
                            <Text style={styles.text1} > CP1801 </Text>
                        </Icon>

                        <Icon style={styles.icon2} name='square-o' >
                            <Text style={styles.text1} > CP1820 </Text>
                        </Icon>

                        <Icon style={styles.icon2} name='square-o' >
                            <Text style={styles.text1} > CP1803 </Text>
                        </Icon>

                        <Icon style={styles.icon2} name='square-o' >
                            <Text style={styles.text1} > CP1850 </Text>
                        </Icon>
                    </View>
=======





>>>>>>> a190c02d427ded015471475fdedab95be0d4f7f2
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
        backgroundColor: 'white'
    },
    navbar: {
        backgroundColor: '#76323f',
        width: 300,
        height: '100%',
        flexDirection: 'column'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: 10
    },
    text: {
<<<<<<< HEAD
        // paddingTop: 10,
        // paddingLeft: 15,
=======

>>>>>>> a190c02d427ded015471475fdedab95be0d4f7f2
        fontSize: 18,
        letterSpacing: 1,
        color: 'white',

    },
<<<<<<< HEAD
    userBox: {
        margin: 10
    },
    line: {
        borderBottomWidth: 1,
        borderColor: 'white',
        marginLeft: 20,
        marginRight: 30
    },
    icon: {
        color: 'white',
        fontSize: 30,
        marginLeft: 30,
        marginTop: 10,

    },
=======
    line: {
        borderBottomWidth: 1,
        borderColor: 'white',
        marginLeft: 20,
        marginRight: 30
    },
    icon: {
        color: 'white',
        fontSize: 30,
        marginLeft: 30,
        marginTop: 10,

    },
>>>>>>> a190c02d427ded015471475fdedab95be0d4f7f2
    text1: {

        paddingLeft: 15,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',

    },

    icon1: {
        color: 'white',
        fontSize: 30,
        marginLeft: 60,
        marginTop: 30,

<<<<<<< HEAD
    },
    icon2: {
        color: 'white',
        fontSize: 30,
        marginLeft: 60,
    },
    arrow: {
        textAlign: 'right',
        fontSize: 50,
        marginRight: 20
    }

=======
    },
    icon2: {
        color: 'white',
        fontSize: 30,
        marginLeft: 60,
    },
    arrow: {
        textAlign: 'right',
        fontSize: 50,
        marginRight: 20,
    },
>>>>>>> a190c02d427ded015471475fdedab95be0d4f7f2

    collaps: {
        marginLeft: 10,
        fontSize: 18,
        letterSpacing: 1,
        color: 'white',
        marginTop: 15,
        padding: 10

    },
    checkboxes: {
        flexDirection: 'row',
        marginLeft: 45,
        marginTop: 15,
        padding: 1


    },
    checkboxe1: {

        marginLeft: 18,
        marginTop: 30,
        padding: 1
    },
    checkboxe2: {
        
                marginLeft: 18,
                marginTop: 30,
                // padding: 1
            },
    collaps1: {
        marginLeft: 5,
        fontSize: 18,
        letterSpacing: 1,
        color: 'white',
        marginTop: 15,
        padding: 10

    },
    searchBox: {
        backgroundColor: 'white',
        padding: 5,
        width: 200,
        height: 50,
        marginTop: 10,
        marginLeft: 15,


    },

});