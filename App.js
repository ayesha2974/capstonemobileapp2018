import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './login'
import ResetPassword from './ResetPassword'
import ResetPassword2 from './ResetPassword2'


export default class App extends React.Component {
  render() {
    return (
      <View>
       {/* <Login />  */}
        {/* <ResetPassword/> */}
        <ResetPassword2/>
      </View>
    );
  }
}

