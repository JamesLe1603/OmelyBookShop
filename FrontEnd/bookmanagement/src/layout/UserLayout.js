import Home from "../user/home";
import Navbar from "./navbar";
import { BrowserRouter, Route,Routes,Outlet } from "react-router";
const UserLayout = () =>{
    return(
        <>
            <Navbar/>
            <div className="content">
                <Outlet />
            </div>
        </>
    )
}
export default UserLayout;