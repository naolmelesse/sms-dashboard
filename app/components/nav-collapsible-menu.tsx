'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface subTab {
    label: string;
    href: string;
  }

interface Tab {
  label: string;
  href: string;
  isMenu: boolean;
  Icon: React.ComponentType<any>;
  subTabs?: subTab[];
}

const CollapsibleMenu: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tab: Tab) => {
    if (tab.subTabs) {
      setActiveTab(tab.label);
    } else {
      // Do something else
    }
  };

  return (
    <div className="collapsible-menu">
      <ul>
        {tabs.map((tab) => (
          <li key={tab.label}
            className= 'cursor-pointer flex items-center justify-between' onClick={() => handleTabClick(tab)} >
            <Link className="flex items-center gap-2" href={tab.href}><tab.Icon className="text-lg"/> {tab.label}</Link>
            {tab.isMenu && <IoIosArrowForward/>}
            {tab.subTabs && (
              <motion.ul
                initial={{ height: 0, display: 'none' }}
                animate={{
                  height: activeTab === tab.label ? 'auto' : 0,
                  display: activeTab === tab.label ? 'block' : 'none',
                  transition: {
                    duration: 0.5,
                    ease: 'easeInOut',
                  },
                }}
              >
                {tab.subTabs.map((subTab) => (
                  <li key={subTab.label}>
                    <a href="#">{subTab.label}</a>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollapsibleMenu;