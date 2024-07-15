import { createBrowserRouter } from "react-router-dom";
import Dashboard from '..//Layout/Dashboard'
import AllUsers from "../Dashboard/Admin/AllUsers";
import Transaction from "../Dashboard/Admin/Transaction";
import AgentTransaction from "../Dashboard/Agent/AgentTransaction";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Dashboard/>,
            },
            {
                path: 'transaction',
                element: <Transaction/>,
            },
            {
                path:'agentTransaction',
                element: <AgentTransaction/>
            }
        ]
    },
]);

export default router;