import Navbar from "../../shared/components/navbar";
import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import Menu from "../../pages/Home/components/menu";
import Footer from "../../pages/Home/components/footer";
const UserLayout = () => {
    return (
        <>
            <div className="content">
                <Menu/>
                <Outlet />
                <Footer/>
            </div>
        </>
    )
}
export default UserLayout;