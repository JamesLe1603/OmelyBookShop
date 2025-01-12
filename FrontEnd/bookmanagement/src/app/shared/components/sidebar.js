import { useContext } from "react";
import { SideBarContext } from "./SideBarContext";
import { Link } from "react-router";
import { UserContext } from "./UserContext";

const SideBar = () => {
    const { openSideBar } = useContext(SideBarContext);
    const {user,userAvatar} = useContext(UserContext);
    return (
        <>
            <div className={`sidebar pe-4 pb-3 ${openSideBar ? "open" : ""}`}>
                <nav className="navbar bg-secondary navbar-dark">
                    <Link to="/admin" className="navbar-brand mx-4 mb-3">
                        <h3 className="text-primary">OMELY ADMIN</h3>
                    </Link>
                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <img className="rounded-circle" src={userAvatar} alt="" style={{ width: "40px", height: "40px" }} />
                            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">{user.sub}</h6>
                            <span>{user.role}</span>
                        </div>
                    </div>
                    <div className="navbar-nav w-100">
                        <a href="index.html" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Management</a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <Link to="/admin/storage" className="dropdown-item">Storage</Link>
                                <Link to="/admin/category" className="dropdown-item">Categories</Link>
                            </div>
                        </div>
                        <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Widgets</a>
                        <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Forms</a>
                        <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Tables</a>
                        <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a href="signin.html" className="dropdown-item">Sign In</a>
                                <a href="signup.html" className="dropdown-item">Sign Up</a>
                                <a href="404.html" className="dropdown-item">404 Error</a>
                                <a href="blank.html" className="dropdown-item">Blank Page</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default SideBar;