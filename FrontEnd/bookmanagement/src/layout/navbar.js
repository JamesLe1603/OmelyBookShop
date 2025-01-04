import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const {user} = useContext(UserContext);
    console.log("user in Nav: ",user);
    return (
        <>
            <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                <a href="#" class="navbar-brand d-flex d-lg-none me-4">
                    <h2 class="text-primary mb-0"><i class="fa fa-user-edit"></i></h2>
                </a>
                <a href="#" class="sidebar-toggler flex-shrink-0">
                    <i class="fa fa-bars"></i>
                </a>
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control bg-dark border-0" type="search" placeholder="Search" />
                </form>
                <div class="navbar-nav align-items-center ms-auto">
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