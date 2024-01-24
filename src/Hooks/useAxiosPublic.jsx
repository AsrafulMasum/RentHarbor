import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://rentharbor.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
