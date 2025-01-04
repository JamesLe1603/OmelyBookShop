import { Outlet } from "react-router";
import Navbar from "./navbar";

const AdminLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}
export default AdminLayout;