import Navbar from "../../shared/components/navbar";
import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import Menu from "../../pages/Home/components/menu";
import Footer from "../../pages/Home/components/footer";
import { useContext } from "react";
import { SideBarContext } from "../../shared/components/SideBarContext";
import SideBar from "../../shared/components/sidebar";
const UserLayout = () => {
    const { openSideBar } = useContext(SideBarContext)
    return (
        <>
            <SideBar />
            <div className={`content ${openSideBar ? "open" : ""}`}>
                <Menu />
                <div className="container p-4" >
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}
export default UserLayout;