import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Outlet/>
        </div>
    );
};

export default Main;