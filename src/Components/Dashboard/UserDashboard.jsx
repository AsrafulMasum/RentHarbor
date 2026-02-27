import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import HostDashboard from "./HostDashboard";
import GuestDashboard from "./GuestDashboard";
import AdminDashboard from "./AdminDashboard";

function UserDashboard() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
    {
      user?.role === "Host" && <HostDashboard />
    }
    {
      user?.role === "Guest" && <GuestDashboard />
    }
    {
      user?.role === "Admin" && <AdminDashboard />
    }
    </>
  );
}

export default UserDashboard;
