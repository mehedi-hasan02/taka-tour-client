import AdminDashboard from "../Dashboard/Admin/AdminDashboard";
import AgentDashboard from "../Dashboard/Agent/AgentDashboard";
import UserDashboard from "../Dashboard/User/UserDashboard";

const Dashboard = () => {
    const isAdmin = false;
    const isAgent = true;
    return (
        <div>
            {
                isAdmin ?
                    <AdminDashboard />
                    :
                    <>
                        {
                            isAgent ?
                                <AgentDashboard />
                                :
                                <UserDashboard />
                        }
                    </>
            }
        </div>
    );
};

export default Dashboard;