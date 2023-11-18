import React from 'react';
import StudentInfoContainer from './components/student-info-container';
import Nav from './components/nav';
import StudentQuickTabs from "./components/student-quick-tabs";
import SideMenu from './components/side-menu';

const  Home = () => {
  return (
    <main className="w-full">
        <Nav/>
        <StudentQuickTabs/>
        <StudentInfoContainer/>
    </main>
  )
}

export default Home;