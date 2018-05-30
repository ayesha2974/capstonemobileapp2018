import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './login'
import Reset from './Reset'
import EnterPass from './EnterPass'
import NavInstructor from './NavInstructor'
import NavStudent from './NavStudent'
import Chat from './Chat'
import AdminRegister from './AdminRegister'
import FacultyList from './FacultyList'
import AdminProfile from './AdminProfile'
import InstructorGradePage from './InstructorGradePage'
import InstructorExam from './InstructorExam'
import Instructor from './Instructor'
// import StudentExam from './StudentExam'
import InstructorProfile from './InstructorProfile'
import StudentProfile from './StudentProfile'
import Instructor_Homepage from './Instructor_Homepage'
import Student_Homepage from './Student_Homepage'
import EnrollStudent from './EnrollStudent'
import AddCourse from './AddCourse'
import NavAdmin from './NavAdmin'
import Admin from './Admin'


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
        {<Instructor_Homepage/>}
        {/* <Student_Homepage /> */}
        {/* <Instructor /> */}
        {/* <AdminRegister /> */}
        {/* <InstructorExam/> */}
        {/* {<InstructorGradePage/>} */}
        {/* <StudentExam /> */}
        {/* <Instructor /> */}
        {/* <Test /> */}
        {/* <Test2 />  */}
        {/* <Test3 /> */}
        {/* <AdminProfile/>  */}
        {/* <InstructorProfile/>  */}
        {/* <StudentProfile/>   */}
        {/* <EnrollStudent/> */}
        <Admin/>
        {/* <AddCourse/> */}
        {/* <NavAdmin /> */}
      </View>
    );
  }
}

