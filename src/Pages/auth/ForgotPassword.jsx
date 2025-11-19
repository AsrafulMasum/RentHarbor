import { useState, useContext } from "react";
import bgImage from "../../assets/house.jpg";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { forgotPassword } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await forgotPassword(email);
      toast.success("Password reset code sent to your email!");
      navigate(`/verify-email?email=${email}&reset=true`);
    } catch (error) {
      console.error("Reset failed:", error);
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
          <h2 className="text-white text-2xl font-semibold">
            Send Verification Code
          </h2>

          <input
            className="w-full px-4 py-2 bg-transparent text-white border-b border-gray-400 border-opacity-60 outline-none placeholder:text-white"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button
            text="Send Verification Code"
            style="w-full mt-4 bg-primary font-bold text-base text-white border-0"
            loading={loading}
          />

          <Link
            to="/login"
            className="text-primary hover:underline text-base font-semibold"
          >
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
