import { useContext, useState } from "react";
import bgImage from "../../assets/house.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const resetToken = localStorage.getItem("resetToken");
  const { resetPassword } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resetToken) {
      return toast.error("Invalid or expired reset session!");
    }

    if (password !== confirm) {
      return toast.error("Passwords do not match!");
    }

    setLoading(true);
    const newPassword = password;
    try {
      const res = await resetPassword(resetToken, newPassword);

      if (res?.success) {
        toast.success("Password reset successful!");
        localStorage.removeItem("resetToken");

        navigate("/login");
      }
    } catch (error) {
      console.error("Reset failed:", error);
      toast.error(error?.response?.data?.message || "Reset failed!");
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
            Reset Your Password
          </h2>

          <input
            className="w-full px-4 py-2 bg-transparent text-white border-b border-gray-400 border-opacity-60 outline-none placeholder:text-white"
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            className="w-full px-4 py-2 bg-transparent text-white border-b border-gray-400 border-opacity-60 outline-none placeholder:text-white"
            type="password"
            placeholder="Confirm New Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <Button
            text="Reset Password"
            style="w-full mt-4 bg-primary font-bold text-base text-white border-0"
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
