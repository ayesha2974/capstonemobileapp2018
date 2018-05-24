import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './login'
import Reset from './Reset'
import EnterPass from './EnterPass'
<<<<<<< HEAD
import NavInstructor from './NavInstructor'
import NavStudent from './NavStudent'
import Chat from './Chat'
=======
 import NavInstructor from './NavInstructor'
// import Chat from './Chat'
>>>>>>> a190c02d427ded015471475fdedab95be0d4f7f2
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
<<<<<<< HEAD
        {/* <NavInstructor /> */}
        {/* <NavStudent /> */}
        <Chat />
=======
        <NavInstructor />
        {/* <Chat /> */}
>>>>>>> a190c02d427ded015471475fdedab95be0d4f7f2
        {/* <FacultyList/> */}
        {/* <AdminRegister /> */}
        {/* <InstructorExam/> */}
        {/* {<InstructorGradePage/>} */}
<<<<<<< HEAD

        {/* <StudentExam /> */}
=======
        {/* <StudentExam/> */}
        {/* {<NavStudent/>} */}

        
>>>>>>> a190c02d427ded015471475fdedab95be0d4f7f2
      </View>
    );
  }
}

