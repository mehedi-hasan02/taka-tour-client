import { createBrowserRouter } from "react-router-dom";
import Dashboard from '..//Layout/Dashboard'
import AllUsers from "../Dashboard/Admin/AllUsers";
import Transaction from "../Dashboard/Admin/Transaction";
import AgentTransaction from "../Dashboard/Agent/AgentTransaction";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <PrivateRouter>
                    <Dashboard/>
                </PrivateRouter>,
            },
            {
                path: 'transaction',
                element: <Transaction/>,
            },
            {
                path:'agentTransaction',
                element: <AgentTransaction/>
            },
            {
                path: 'login',
                element: <Login/>,
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    },
]);

export default router;