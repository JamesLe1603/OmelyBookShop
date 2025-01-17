import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../shared/components/UserContext";
import { Outlet } from "react-router";
import Header from "../../shared/components/Header";
import { SideBarContext } from "../../shared/components/SideBarContext";
const AdminHome = () => {
    const { openSideBar } = useContext(SideBarContext);
    return (
        <div className={`content ${openSideBar ? "open" : ""}`}>
            <Header />
            <Outlet />
        </div>
    )
}
export default AdminHome;