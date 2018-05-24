import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './login'
import Reset from './Reset'
import EnterPass from './EnterPass'
 import NavInstructor from './NavInstructor'
// import Chat from './Chat'
import AdminRegister from './AdminRegister'
// import FacultyList from './FacultyList'
import InstructorGradePage from './InstructorGradePage'
import InstructorExam from './InstructorExam'
import StudentExam from './StudentExam'
import NavStudent from './NavStudent'

export default class App extends React.Component {
  render() {
    return (
      <View>
        {/* <Login />  */}
        {/* <Reset/>  */}
        {/* <EnterPass /> */}
        <NavInstructor />
        {/* <Chat /> */}
        {/* <FacultyList/> */}
        {/* <AdminRegister /> */}
        {/* <InstructorExam/> */}
        {/* {<InstructorGradePage/>} */}
        {/* <StudentExam/> */}
        {/* {<NavStudent/>} */}

        
      </View>
    );
  }
}

