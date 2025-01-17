import { useNavigate, Link } from "react-router";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../shared/components/UserContext";
import { SideBarContext } from "../../../shared/components/SideBarContext";

const Menu = () => {
  const { user, userAvatar, setUser, setUserAvatar } = useContext(UserContext);
  const { setOpenSideBar } = useContext(SideBarContext)
  const handleClick = () => {
    setOpenSideBar((prevStatus) => !prevStatus);
  }
  const navigate = useNavigate();
  const handleLogOut = () => {
    setUser(null);
    setUserAvatar(null);
    navigate("/")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container">
        <a href="#" onClick={handleClick} className="sidebar-toggler flex-shrink-0">
          <i className="fa fa-bars"></i>
        </a>
        <Link className="navbar-brand text-primary" to="/">
          OMELY BOOKSHOP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={user ? `/cart` : `/login`}>
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <input className="form-control" placeholder="search" />
          </ul>
          <ul className="navbar-nav">
            {user ? (
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <img className="rounded-circle me-lg-2" src={userAvatar} alt="" style={{ width: "40px", height: "40px" }} />
                  <span className="d-none d-lg-inline-flex">{user.sub}</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">Omely Website</a>
                  <a href="#" className="dropdown-item">Settings</a>
                  <a href="#" className="dropdown-item" onClick={handleLogOut}>Log Out</a>
                </div>
              </div>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Menu;