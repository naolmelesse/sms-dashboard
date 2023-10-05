
import { RxDashboard } from "react-icons/rx";
import { PiStudentLight } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { SiGoogleclassroom } from 'react-icons/si';
import { SlNotebook } from 'react-icons/sl';
import { BiTime, BiNotepad } from "react-icons/bi";
import { BsBellFill, BsGearFill,BsPencilSquare } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { MdOutlineLibraryBooks } from "react-icons/md";

export const tabs = [
  {
    isMenu: true,
    label: 'Dashboard',
    href: '/',
    Icon: RxDashboard,
  },
  {
    isMenu: true,
    label: 'Students',
    href: '/students',
    Icon: PiStudentLight,
    subTabs: [
      {
        label: 'List of Students',
        href: '/students/list',
      },
      {
        label: 'Admission Form',
        href: '/students/add',
      },
    ]
  },
  {
    isMenu: true,
    label: 'Teachers',
    href: '/teachers',
    Icon: IoIosPeople,
    subTabs: [
      {
        label: 'List of Teachers',
        href: '/teachers/list',
      },
      {
        label: 'Add Teacher',
        href: '/teachers/add',
      },
      {
        label: 'Payment',
        href: '/teachers/payment',
      },
    ]
  },
  {
    isMenu: true,
    label: 'Parents',
    href: '/parents',
    Icon: IoPeople,
    subTabs: [
      {
        label: 'List of Parents',
        href: '/parents/list',
      },
      {
        label: 'Add Parent',
        href: '/parents/add',
      },
    ]
  },
  {
    isMenu: true,
    label: 'Classes',
    href: '/classes',
    Icon: SiGoogleclassroom,
  },
  {
    isMenu: false,
    label: 'Subject',
    href: '/subject',
    Icon: SlNotebook,
  },
  {
    isMenu: true,
    label: 'Learning Material',
    href: '/learning-material',
    Icon: MdOutlineLibraryBooks,
  },
  {
    isMenu: false,
    label: 'Class Schedule',
    href: '/class-schedule',
    Icon: BiTime,
  },
  {
    isMenu: false,
    label: 'Attendance',
    href: '/attendance',
    Icon: BiNotepad, // updated icon
  },
  {
    isMenu: true,
    label: 'Exam',
    href: '/exam',
    Icon: BsPencilSquare, // updated icon
  },
  {
    isMenu: false,
    label: 'Notice',
    href: '/notice',
    Icon: BsBellFill,
  },
  {
    isMenu: true,
    label: 'Fees',
    href: '/fees',
    Icon: GrMoney,
  },
  {
    isMenu: true,
    label: 'Settings',
    href: '/settings',
    Icon: BsGearFill,
  },
];