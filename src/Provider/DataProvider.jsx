import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);

  const loginUser = async (email, password, setLoading) => {
    const res = await axiosPublic.post("/auth/login", { email, password });
    if (res.data.success) {
      setUser(res.data.user);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      axiosPublic
        .post("/jwt", user, {
          withCredentials: true,
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    } else {
      axiosPublic
        .post("/logout", user, {
          withCredentials: true,
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    }
  }, [axiosPublic, user]);

  const logoutUser = () => {
    setUser(null);
  };

  const data = {
    user,
    loginUser,
    logoutUser,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataProvider;
