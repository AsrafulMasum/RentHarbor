import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DataContext } from "../Provider/DataProvider";
import UserDropdown from "./UserDropdown";
import Button from "./Button";

const Navbar = ({ children }) => {
  const navigate = useNavigate()
  const { user } = useContext(DataContext);

  const navLinks = (
    <>
      <li>
        <Link>Navbar Item 1</Link>
      </li>
      <li>
        <Link>Navbar Item 2</Link>
      </li>
    </>
  );

  const handleNavigate = () => {
    navigate("/login")
  }
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-black bg-opacity-60">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link to="/" className="flex-1 px-2 mx-2">
            <img className="w-12" src={logo} alt="Logo" />
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {navLinks}
            </ul>
          </div>
          <div className="ml-4">
            {user ? (
              <UserDropdown></UserDropdown>
            ) : (
              // <Link
              //   to="/login"
              //   className="btn btn-sm btn-outline text-white px-6 hover:bg-primary hover:border-primary duration-300"
              // >
              //   Join Us
              // </Link>
              <div onClick={handleNavigate}>
                <Button
                  text="Login"
                  style="btn btn-sm border-primary hover:border-white"
                ></Button>
              </div>
            )}
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
