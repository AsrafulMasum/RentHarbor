import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);

  const loginUser = async (email, password) => {
    const res = await axiosPublic.post("/auth/login", { email, password });
    if (res.data.success) {
      setUserIdToLS(res.data.user._id);
    }
  };

  const setUserIdToLS = (id) => {
    localStorage.setItem("userId", id);
    getUser();
  };

  const getUser = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const res = await axiosPublic.get(`/auth/user/${userId}`);
      setUser(res.data.user);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      axiosPublic
        .post("/token/jwt", user, {
          withCredentials: true,
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    } else {
      axiosPublic
        .post("/token/logout", user, {
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
    localStorage.removeItem("userId");
  };

  const data = {
    user,
    getUser,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
