import AdminHome from "../../pages/AdminHome/AdminHome";
import AdminServer from "../../pages/AdminHome/AdminHome";
import SideBar from "../../shared/components/sidebar";

const AdminLayout = () => {
    return (
        <div className="container-fluid position-relative d-flex p-0">
            <AdminHome />
            <SideBar />
        </div>
    )
}
export default AdminLayout;