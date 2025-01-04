import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Outlet } from "react-router";
const AdminServer = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            <h1>Hello {user.sub}</h1>
            <Outlet/>
        </>
    )
}
export default AdminServer;