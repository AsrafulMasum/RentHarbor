import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar>
        <Outlet></Outlet>
      </Navbar>
    </div>
  );
};

export default MainLayout;
