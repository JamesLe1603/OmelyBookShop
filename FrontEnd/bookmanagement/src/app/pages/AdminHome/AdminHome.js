import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../shared/components/UserContext";
import { Outlet } from "react-router";
import Header from "../../shared/components/Header";
import { SideBarContext } from "../../shared/components/SideBarContext";
const AdminServer = () => {
    const { user } = useContext(UserContext);
    const { openSideBar } = useContext(SideBarContext);
    console.log(openSideBar);
    return (
        <div className={`content ${openSideBar ? "open" : ""}`}>
            <Header />
            <h1>Hello {user.sub}</h1>
            <Outlet />
        </div>
    )
}
export default AdminServer;