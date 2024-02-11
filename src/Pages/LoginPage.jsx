import { useContext, useState } from "react";
import bgImage from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { DataContext } from "../Provider/AuthProvider";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await loginUser(email, password, setLoading);
    navigate("/");
  };

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-4 w-4/5 lg:w-3/5 p-10 bg-black bg-opacity-80 rounded-2xl">
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full px-4 py-2 bg-transparent text-center text-white border-b border-gray-400 outline-none placeholder:text-white"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full px-4 py-2 bg-transparent text-center text-white border-b border-gray-400 outline-none placeholder:text-white"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button text="Login" style="w-1/2 mt-4 bg-transparent" loading={loading} />
        </form>
        <div className="text-center">
          <Link
            className="text-white text-center mt-2 text-sm hover:underline"
            to="/register"
          >
            Don&#39;t have an account? Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
