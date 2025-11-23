import { useContext, useState } from "react";
import bgImage from "../../assets/house.jpg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error?.response?.data?.message || error);
      toast.error(error?.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-end"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center gap-4 w-4/5 lg:w-1/2 p-40 bg-black min-h-screen">
        <form
          className="flex flex-col items-center gap-10 w-full"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full px-4 py-2 bg-transparent text-white border-b border-gray-400 border-opacity-60 outline-none placeholder:text-white"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full px-4 py-2 bg-transparent text-white border-b border-gray-400 border-opacity-60 outline-none placeholder:text-white"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Link
            to="/forgot-password"
            className="text-primary hover:underline text-base font-semibold"
          >
            Forgot Password?
          </Link>

          <Button
            text="Login"
            style="w-full mt-4 bg-primary font-bold text-base text-white border-0"
            loading={loading}
          />
        </form>

        <div className="text-white text-center mt-2 text-sm">
          Don&#39;t have an account?{" "}
          <Link
            to="/register"
            className="text-primary hover:underline text-base font-semibold"
          >
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
