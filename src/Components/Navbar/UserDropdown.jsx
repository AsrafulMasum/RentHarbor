import PropTypes from "prop-types";
import defaultUser from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User Image"
              src={user?.photo_url ? user?.photo_url : defaultUser}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black rounded-box w-52"
        >
          <li>
            <Link to="/dashboard" className="text-white mt-1 px-[14px]">
              Dashboard
              <span className="badge">{user?.role}</span>
            </Link>
          </li>

          <li>
            <Link className="text-white mt-1 px-[14px]">Become A Host</Link>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="text-primary mt-1 px-[14px] font-bold"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;

UserDropdown.propTypes = {
  badge: PropTypes.string,
};
