import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login'
import Reset from './Reset'
import EnterPass from './EnterPass'
import NavInstructor from './NavInstructor'
import AdminRegister from './AdminRegister'
import FacultyList from './FacultyList'

export default class App extends React.Component {
  render() {
    return (
      <View>
        {/* <Login />  */}
        {/* <Reset/>  */}
        <EnterPass />
        {/* <NavInstructor /> */}
        {/* <FacultyList/> */}
        {/* <AdminRegister /> */}

      </View>
    );
  }
}

