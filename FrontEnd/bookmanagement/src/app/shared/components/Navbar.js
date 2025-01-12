import { useContext, useState,useEffect } from "react";
import { UserContext } from "./UserContext";
import { SideBarContext } from "./SideBarContext";
import axios from "axios";

const Navbar = () => {
    const { user,userAvatar } = useContext(UserContext);
    const { setOpenSideBar } = useContext(SideBarContext)
    console.log("user id in Nav: ", user.jti);
    console.log("username in Nav: ", user.sub);
    console.log(user);
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
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <img className="rounded-circle me-lg-2" src={userAvatar} alt="" style={{width: "40px", height: "40px"}}/>
                                    <span className="d-none d-lg-inline-flex">{user.sub}</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">Omely Website</a>
                                <a href="#" className="dropdown-item">Settings</a>
                                <a href="#" className="dropdown-item">Log Out</a>
                            </div>
                        </div>
                    ) : (
                        <a href="/login" className="nav-link">Login</a>
                    )}
                </div>
            </nav>
        </>
    )
}
export default Navbar;