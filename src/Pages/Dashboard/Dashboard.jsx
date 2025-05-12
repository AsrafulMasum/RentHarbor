import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineManageAccounts, MdOutlinePayments } from "react-icons/md";
import { LuTableProperties } from "react-icons/lu";
import { IoLogOutOutline, IoHomeOutline } from "react-icons/io5";

const Dashboard = () => {
  const [isGuestMode, setIsGuestMode] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const handleMode = (mode) => {
    setIsGuestMode(mode);
  };

  return (
    <div className="flex">
      <aside className="flex flex-col w-72 h-screen px-4 py-5 2xl:py-20 overflow-y-auto bg-secondary">
        <div className="flex flex-col items-center -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src={user?.photo_url}
            alt="avatar"
          />
          <h4 className="mx-2 mt-7 font-medium text-gray-200">{user?.name}</h4>
          <p className="mx-2 mt-2 text-xs font-medium text-gray-400">
            {user?.email}
          </p>
        </div>

        {user?.role === "Host" && (
          <div className="text-sm font-medium text-center border-b border-gray-600">
            <ul className="flex justify-center">
              <li className="me-2">
                <a
                  onClick={() => handleMode(true)}
                  className={`inline-block p-4 cursor-pointer ${
                    isGuestMode && "active"
                  }`}
                >
                  Guest
                </a>
              </li>
              <li className="me-2">
                <a
                  onClick={() => handleMode(false)}
                  className={`inline-block p-4 cursor-pointer ${
                    !isGuestMode && "active"
                  }`}
                  aria-current="page"
                >
                  Host
                </a>
              </li>
            </ul>
          </div>
        )}

        <nav className="flex flex-col justify-between h-full gap-10">
          {user?.role === "Guest" && (
            <ul className="flex flex-col mt-4">
              <Link
                to="/dashboard"
                className={`flex items-center px-4 py-2 rounded-lg  text-gray-200 ${
                  location?.pathname === "/dashboard"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <RiDashboardLine className="text-lg" />

                <span className="mx-4 font-medium">Dashboard</span>
              </Link>

              <Link
                to="/dashboard/accounts"
                className={`flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-lg ${
                  location?.pathname === "/dashboard/accounts"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <MdOutlineManageAccounts className="text-xl" />

                <span className="mx-4 font-medium">Accounts</span>
              </Link>

              <Link
                to="/dashboard/properties"
                className={`flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-lg ${
                  location?.pathname === "/dashboard/properties"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <LuTableProperties className="text-xl" />

                <span className="mx-4 font-medium">Properties</span>
              </Link>

              <Link
                to="/dashboard/payments"
                className={`flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-lg ${
                  location?.pathname === "/dashboard/payments"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <MdOutlinePayments className="text-xl" />

                <span className="mx-4 font-medium">Payments</span>
              </Link>
            </ul>
          )}

          {user?.role === "Host" && !isGuestMode && (
            <ul className="flex flex-col mt-4">
              <Link
                to="/dashboard"
                className={`flex items-center px-4 py-2 rounded-lg  text-gray-200 ${
                  location?.pathname === "/dashboard"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <RiDashboardLine className="text-lg" />

                <span className="mx-4 font-medium">Dashboard</span>
              </Link>

              <Link
                to="/dashboard/addProperties"
                className={`flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-lg ${
                  location?.pathname === "/dashboard/addProperties"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <MdOutlinePayments className="text-xl" />

                <span className="mx-4 font-medium">Add Properties</span>
              </Link>

              <Link
                to="/dashboard/myListings"
                className={`flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-lg ${
                  location?.pathname === "/dashboard/myListings"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <LuTableProperties className="text-xl" />

                <span className="mx-4 font-medium">My Listings</span>
              </Link>
            </ul>
          )}

          {user?.role === "Host" && isGuestMode && (
            <ul className="flex flex-col mt-4">
              <Link
                to="/dashboard"
                className={`flex items-center px-4 py-2 rounded-lg  text-gray-200 ${
                  location?.pathname === "/dashboard"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <RiDashboardLine className="text-lg" />

                <span className="mx-4 font-medium">Dashboard</span>
              </Link>

              <Link
                to="/dashboard/accounts"
                className={`flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-lg ${
                  location?.pathname === "/dashboard/accounts"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <MdOutlineManageAccounts className="text-xl" />

                <span className="mx-4 font-medium">Accounts</span>
              </Link>

              <Link
                to="/dashboard/properties"
                className={`flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-lg ${
                  location?.pathname === "/dashboard/properties"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <LuTableProperties className="text-xl" />

                <span className="mx-4 font-medium">Properties</span>
              </Link>

              <Link
                to="/dashboard/payments"
                className={`flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-lg ${
                  location?.pathname === "/dashboard/payments"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <MdOutlinePayments className="text-xl" />

                <span className="mx-4 font-medium">Payments</span>
              </Link>
            </ul>
          )}

          {user?.role === "Admin" && (
            <ul className="flex flex-col mt-4">
              <Link
                to="/dashboard"
                className={`flex items-center px-4 py-2 rounded-lg  text-gray-200 ${
                  location?.pathname === "/dashboard"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <RiDashboardLine className="text-lg" />

                <span className="mx-4 font-medium">Dashboard</span>
              </Link>

              <Link
                to="/dashboard/accounts"
                className={`flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-lg ${
                  location?.pathname === "/dashboard/accounts"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <MdOutlineManageAccounts className="text-xl" />

                <span className="mx-4 font-medium">Accounts</span>
              </Link>

              <Link
                to="/dashboard/allListings"
                className={`flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-lg ${
                  location?.pathname === "/dashboard/allListings"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <LuTableProperties className="text-xl" />

                <span className="mx-4 font-medium">All Listings</span>
              </Link>

              <Link
                to="/dashboard/messages"
                className={`flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-lg ${
                  location?.pathname === "/dashboard/messages"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <MdOutlinePayments className="text-xl" />

                <span className="mx-4 font-medium">Massages</span>
              </Link>

              <Link
                to="/dashboard/users"
                className={`flex items-center px-4 py-2 mt-5 text-gray-200 transition-colors duration-300 transform rounded-lg ${
                  location?.pathname === "/dashboard/users"
                    ? "bg-primary hover:bg-primary text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <MdOutlinePayments className="text-xl" />

                <span className="mx-4 font-medium">Users</span>
              </Link>
            </ul>
          )}

          <ul>
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-800 transition-colors duration-300 transform rounded-lg"
            >
              <IoHomeOutline className="text-lg" />
              <span className="mx-4 font-medium">Home</span>
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 mt-5 text-gray-200 hover:bg-gray-800 transition-colors duration-300 transform rounded-lg w-full"
            >
              <IoLogOutOutline className="text-[22px]" />

              <span className="mx-[13px] font-medium">Logout</span>
            </button>
          </ul>
        </nav>
      </aside>

      <>
        <Outlet />
      </>
    </div>
  );
};

export default Dashboard;
