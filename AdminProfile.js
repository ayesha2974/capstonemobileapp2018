
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import Bar from 'react-native-bar-collapsible';


export default class Test2 extends React.Component {
    render() {
        return (
            <View>
                <Bar 
                    title='Profile'
                    collapsible={true}
                    showOnStart={false}
                    iconCollapsed='chevron-right'
                    iconOpened='chevron-down'>
                    <View style={styles.container}>
                    <View style={styles.inline}>
                        <Text style={styles.titles}> Name  </Text>
                        <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='Name' />
               </View>
               </View>
                </Bar>
                <Bar
                    title='My title'
                    collapsible={true}
                    showOnStart={false}
                    iconCollapsed='chevron-right'
                    iconOpened='chevron-down'
                >
                    <Text> Shafeennnnnnnnnnn  </Text>
                </Bar>


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
        // padding: 16,
        paddingTop: 50,
    },
    inline: {
        flexDirection: 'row',
        width: '15%',
        marginRight: 640,
        marginLeft: 20
        // marginBottom:'50%'

    },
    titles: {
        marginTop: 10, fontSize: 18, fontWeight: 'bold', marginLeft: 7, height: 40
    },
    inputfeilds: {
        backgroundColor: 'white', height: 40, width: 80
    },
})