import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './login'
import Reset from './Reset'
import EnterPass from './EnterPass'
import NavInstructor from './NavInstructor'
import NavStudent from './NavStudent'
// import Chat from './Chat'
import AdminRegister from './AdminRegister'
// import FacultyList from './FacultyList'
import InstructorGradePage from './InstructorGradePage'
import InstructorExam from './InstructorExam'
import StudentExam from './StudentExam'
import Test2 from './Test2'
import Instructor from './Instructor'

export default class App extends React.Component {
  render() {
    return (
      <View>
        {/* <Login />  */}
        {/* <Reset/>  */}
        {/* <EnterPass /> */}
        {/* <NavInstructor /> */}
        {/* <NavStudent /> */}
        {/* <Chat /> */}
        {/* <FacultyList/> */}
        {/* <AdminRegister /> */}
        {/* <InstructorExam/> */}
        {/* {<InstructorGradePage/>} */}
        <Instructor/>

        {/* <StudentExam /> */}
         {/* <Test /> */}
         {/* <Test2 />  */}
         {/* <Test3 /> */}
         {/* <AdminProfile/>  */}
      </View>
    );
  }
}

