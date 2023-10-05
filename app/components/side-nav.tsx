import React from 'react';
import Link from "next/link";
import TabWithSubTabs from './tab-menu';
import Image from "next/image";

interface subTab {
  label: string;
  href: string;
}

interface SideNavigationProps {
    tabs: {
      label: string;
      href: string;
      isMenu: boolean;
      Icon: React.ComponentType<any>;
      subTabs?: subTab[];
    }[];
  }

const SideNav : React.FC<SideNavigationProps> = ({ tabs }) => {

  return (
    <nav className="text-md font-normal w-[15vw] max-h-[90vh] fixed bg-[#fff] mt-[5%] pb-5 overflow-y-auto">
      <div className="pt-6 flex flex-col">
        {tabs.map((tab) => (
            tab.subTabs ? 
              <div key={tab.label} className="flex px-5 py-3 hover:bg-stone-200 transition duration-300">
                <tab.Icon className="text-xl mr-2 "/>
                <TabWithSubTabs  tab={{label: tab.label, href: tab.href, subTabs: tab.subTabs}}/> 
              </div>
            :
            <div key={tab.label}
            className= 'cursor-pointer flex items-center justify-between px-5 py-3 hover:bg-stone-200 transition duration-300' > 
            <Link className="flex items-center gap-2" href={tab.href}><tab.Icon className="text-lg"/> {tab.label}</Link>
            </div>
        ))}
      </div>
    </nav>
  );
}

export default SideNav;