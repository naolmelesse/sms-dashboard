import Timetable from "../components/time-table";
import Nav from '../components/nav';
import StudentQuickTabs from "../components/student-quick-tabs";

export default function Page(){
    return(
    <>
        <Nav/>
        <StudentQuickTabs/>
        <Timetable/>
    </>
    )
}