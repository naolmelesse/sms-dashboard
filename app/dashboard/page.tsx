import SideNav from '../components/side-nav';
import {tabs} from "@/lib/side-nav-tab-items";
import AdminDashboard from '../components/admin-dashboard';

export default function Dashboard(){
    return(
        <div className="flex">
            <SideNav tabs={tabs} />
            <div className="flex-grow">
                <AdminDashboard/>
            </div>
        </div>
    )
}