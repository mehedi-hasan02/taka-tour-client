import { createBrowserRouter } from "react-router-dom";
import Dashboard from '..//Layout/Dashboard'
import AllUsers from "../Dashboard/Admin/AllUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: 'allUsers',
                element: <AllUsers/>
            }
        ]
    },
]);

export default router;