import React from 'react';
import SideNav from './components/side-nav';
import {tabs} from "../lib/side-nav-tab-items";
import Nav from './components/nav';
import AdminDashboard from './components/admin-dashboard';


const  Home = () => {


  return (
    <main className="flex">
      <SideNav tabs={tabs} />
      <div className="flex-grow">
        <Nav/>
        <AdminDashboard/>
      </div>
    </main>
  )
}

export default Home;