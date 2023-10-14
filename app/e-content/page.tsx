import EContentTabs from "../components/e-content-tabs";
import Nav from "../components/nav";
import StudentQuickTabs from "../components/student-quick-tabs";

export default function Page(){
    return(
        <>
        <Nav/>
        <StudentQuickTabs/>
        <EContentTabs/>
        </>
    )
}