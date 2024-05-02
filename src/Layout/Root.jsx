import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
            
            
        </div>
    );
};

export default Root;