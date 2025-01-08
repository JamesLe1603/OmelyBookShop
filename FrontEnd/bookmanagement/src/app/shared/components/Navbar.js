import { useContext } from "react";
import { UserContext } from "./UserContext";
import { SideBarContext } from "./SideBarContext";

const Navbar = () => {
    const { user } = useContext(UserContext);
    const { setOpenSideBar } = useContext(SideBarContext)
    console.log("user in Nav: ", user);
    const handleClick = () => {
        setOpenSideBar((prevStatus) => !prevStatus);
    }
    return (
        <>

            <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                <a href="#" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-user-edit"></i></h2>
                </a>
                <a href="#" onClick={handleClick} className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars"></i>
                </a>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                </form>
                <div className="navbar-nav align-items-center ms-auto">
                    {user ? (
                        <b>{user.sub}</b>
                    ) : (
                        <a href="/login" className="nav-link">Login</a>
                    )}
                </div>
            </nav>
        </>
    )
}
export default Navbar;