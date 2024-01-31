import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logoutUser } = useContext(DataContext);

  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          logoutUser();
          navigate("/logIn");
        }
      }
    );
  }, [logoutUser, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
