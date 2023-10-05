'use client'
import React, { useState } from 'react';
import Link from "next/link";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

interface Tab {
  label: string;
  href: string;
  subTabs?: Tab[];
}

const TabWithSubTabs: React.FC<{ tab: Tab }> = ({ tab }) => {
  const [activeSubTab, setActiveSubTab] = useState('');

  const handleTabClick = (subTab: Tab) => {
    if(activeSubTab == subTab.label) setActiveSubTab('');
    else setActiveSubTab(subTab.label);
  };

  return (
    <div key={tab.label} className="w-full">
      <div className="cursor-pointer flex items-center justify-between" onClick={() => handleTabClick(tab)}>
        {tab.label}
        { activeSubTab ? <IoIosArrowDown/> :<IoIosArrowForward className=""/> }
      </div>
      <div>

        {tab.subTabs && (
            <div
            >
            <div className={`${activeSubTab === tab.label ? 'visible' : 'hidden'} flex flex-col`}>
                {tab.subTabs.map((subTab) => (
                    <Link className="py-2 hover:text-[#fff] transition duration-300" href={subTab.href} key={subTab.label}><IoIosArrowForward className="inline"/> {subTab.label}</Link>
                ))}
            </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default TabWithSubTabs;