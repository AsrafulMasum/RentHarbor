import "./Navigation.css";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UserDropdown from "./UserDropdown";
import Button from "../Button";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const notificationCount = 2;

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProperties">Properties</NavLink>
      </li>
    </>
  );

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.search.value;
    if (searchQuery) {
      navigate(`/allProperties?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/allProperties");
    }
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full bg-secondary fixed shadow-2xl shadow-gray-950 z-50">
          <div className="navbar max-w-screen-xl mx-auto">
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
                  className="inline-block w-6 h-6 stroke-white"
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
            <div className="flex-1">
              <Link to="/">
                <img className="w-20" src={logo} alt="Logo" />
              </Link>
            </div>
            <form
              onSubmit={handleSearchSubmit}
              className="hidden lg:flex items-center justify-between"
            >
              <input
                className="h-10 w-60 rounded-l-xl bg-transparent border border-r-0 focus:outline-none px-5 text-white placeholder:text-gray-300"
                type="text"
                name="search"
                placeholder="Search ..."
              />
              <button
                type="submit"
                className="rounded-r-xl border border-l-0 py-[7px] px-2 text-primary text-2xl font-extrabold"
              >
                <CiSearch />
              </button>
            </form>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navLinks}
              </ul>
            </div>
            <div className="space-x-6">
              {/* Notifications */}
              {user && (
                <Link to="/notifications" className="relative inline-block">
                  {/* Notification Icon */}
                  <IoIosNotificationsOutline
                    size={32}
                    className="text-primary"
                  />

                  {/* Badge */}
                  {notificationCount > 0 && (
                    <span
                      className="absolute -top-1 -right-1 bg-secondary_ex text-black text-xs font-semibold 
                   px-1.5 py-0.5 rounded-full"
                    >
                      {notificationCount}
                    </span>
                  )}
                </Link>
              )}

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
                    text="Book Now"
                    style="btn btn-sm border-none bg-primary text-white"
                  ></Button>
                </div>
              )}
            </div>
            {user && user?.role === "Guest" && !user?.isRequestedForHost && (
              <div className="ml-4 pl-4 border-l hidden md:block">
                <Link to="/become-a-host">
                  <Button
                    text="Become A Host"
                    style="btn border-tertiary hover:border-transparent bg-transparent text-white"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* Page content here */}
        <div>{children}</div>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-secondary">
          {/* Sidebar content here */}
          <div className="flex items-center justify-center mb-5">
            <input
              className="h-10 w-60 rounded-l-xl bg-transparent border border-r-0 focus:outline-none px-5 text-white placeholder:text-gray-300 "
              type="text"
              name="search"
              placeholder="Search ..."
            />
            <button className="rounded-r-xl border border-l-0 py-[7px] px-2 text-primary text-2xl font-extrabold">
              <CiSearch />
            </button>
          </div>
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
