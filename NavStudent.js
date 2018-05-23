import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class NavStudent extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image style={styles.image} source={require('./panda.jpg')} />
                        </View>
                        <View>
                            <Text style={styles.text}>Student Name</Text>
                            <Text style={styles.text}>60087633</Text>
                            <TouchableOpacity>
                                <Text style={styles.text}>My Profile</Text>
                            </TouchableOpacity>
                        </View>
                       
                    </View>
                    <Text style={styles.line}> </Text>
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
                   </View>
                   <Text style={styles.line}> </Text>
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
    text:{
        paddingTop:10, 
        paddingLeft:15,
        fontSize:18,
        color: 'white',
      
    },
    line:{
        borderBottomWidth:1,
        borderColor:'white',
        marginLeft:20,
        marginRight:30
    },
    icon:{
        color:'white',
        fontSize:30,
        marginLeft:30,
         marginTop:10,
        
    },
    text1:{
   
        paddingLeft:15,
        fontSize:18,
        color: 'white',
        textAlign: 'center',
        
    },
   
     icon1:{
        color:'white',
        fontSize:30,
        marginLeft:60,
        marginTop:30,
        
    },
    icon2:{
        color:'white',
        fontSize:30,
        marginLeft:60,  
    },
    arrow:{
        textAlign:'right',
        fontSize:50,
        marginRight:20
    }
    


});
