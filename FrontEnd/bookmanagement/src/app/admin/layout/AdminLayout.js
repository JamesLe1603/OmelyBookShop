import AdminHome from "../../pages/AdminHome/AdminHome";
import AdminServer from "../../pages/AdminHome/AdminHome";
import SideBar from "../../shared/components/sidebar";
import { Helmet } from "react-helmet";
const AdminLayout = () => {
    return (
        <>
            <Helmet>
                <title>Omely Admin</title>
            </Helmet>
            <div className="container-fluid position-relative d-flex p-0">
                <AdminHome />
                <SideBar />
            </div>
        </>
    )
}
export default AdminLayout;