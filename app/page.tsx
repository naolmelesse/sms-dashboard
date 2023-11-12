import React from 'react';
import StudentInfoContainer from './components/student-info-container';
import Nav from './components/nav';
import StudentQuickTabs from "./components/student-quick-tabs";
import SideMenu from './components/side-slide-menu';

const  Home = () => {
  return (
    <main className="w-full">
        <Nav/>
        <StudentQuickTabs/>
        <SideMenu/>
        <StudentInfoContainer/>
    </main>
  )
}

export default Home;