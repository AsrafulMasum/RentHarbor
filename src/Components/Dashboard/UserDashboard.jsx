import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

function UserDashboard() {
  const { user } = useContext(AuthContext);
  console.log(user)

  return <div className="text-black">UserDashboard</div>;
}

export default UserDashboard;
