import React from 'react';
import SideNav from './components/side-nav';
import {tabs} from "../lib/side-nav-tab-items";
import AdminDashboard from './components/admin-dashboard';


const  Home = () => {


  return (
    <main className="flex">
      <SideNav tabs={tabs} />
      <div className="flex-grow max-h-4/5">
        <AdminDashboard/>
      </div>
    </main>
  )
}

export default Home;