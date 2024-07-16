import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";


const PrivateRouter = ({children}) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();
    if (isLoggedIn) {
        return children;
    }
    // if (loading) {
    //     return <div className="text-center">
    //         <progress className="progress w-56"></progress>
    //     </div>
    // }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;