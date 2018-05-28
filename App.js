import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './login'
import Reset from './Reset'
import EnterPass from './EnterPass'
import NavInstructor from './NavInstructor'
import NavStudent from './NavStudent'
// import Chat from './Chat'
import AdminRegister from './AdminRegister'
import FacultyList from './FacultyList'
import AdminProfile from './AdminProfile'
import InstructorGradePage from './InstructorGradePage'
import InstructorExam from './InstructorExam'
// import StudentExam from './StudentExam'
import InstructorProfile from './InstructorProfile'
import StudentProfile from './StudentProfile'
import Instructor_Homepage from './Instructor_Homepage'
import Student_Homepage from './Student_Homepage'
import Instructor from './Instructor'
export default class App extends React.Component {
  render() {
    return (
      <View>
        {/* <Login />  */}
        {/* <Reset/>  */}
        {/* <EnterPass /> */}
        {/* <NavInstructor /> */}
        {/* {<NavStudent />} */}
        {/* <Chat /> */}
        {/* <FacultyList/> */}
        {/* <Instructor_Homepage/> */}
        {/* <Student_Homepage /> */}
        <Instructor />
        {/* <AdminRegister /> */}
        {/* <InstructorExam/> */}
        {/* {<InstructorGradePage/>} */}
        {/* <StudentExam /> */}
        {/* <Test /> */}
        {/* <Test2 />  */}
        {/* <Test3 /> */}
        {/* <AdminProfile/>  */}
        {/* <InstructorProfile/>  */}
        {/* <StudentProfile/>   */}
      </View>
    );
  }
}

