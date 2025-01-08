import Navbar from "../../shared/components/Navbar";
import { BrowserRouter, Route, Routes, Outlet } from "react-router";
const UserLayout = () => {
    return (
        <>
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
        </>
    )
}
export default UserLayout;