import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;