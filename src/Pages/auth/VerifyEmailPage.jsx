import { useState, useContext } from "react";
import bgImage from "../../assets/house.jpg";
import Button from "../../Components/Button";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyEmailPage = () => {
  const { verifyEmailCode, resendCode, verifyResetCode } =
    useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");

  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const isReset = searchParams.get("reset");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isReset) {
        // verify reset code
        const res = await verifyResetCode(email, code);
        if (res?.success) {
          // save token for next step
          localStorage.setItem("resetToken", res.resetToken);

          toast.success("Code verified successfully.");
          navigate("/reset-password");
        }
      } else {
        // verify email code (normal verification)
        const res = await verifyEmailCode(email, code);

        if (res?.success) {
          toast.success("Email verified successfully.");
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("Verification failed:", error);
      toast.error(error?.response?.data?.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  const resendVerificationCode = async () => {
    setLoading(true);

    try {
      await resendCode(email);
    } catch (error) {
      console.error("Verification failed:", error);
    } finally {
      setLoading(false);
      toast.success("Verification code sent successfully.");
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
            type="text"
            placeholder="Enter Verification Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />

          <Button
            text="Verify Email"
            style="w-full mt-4 bg-primary font-bold text-base text-white border-0"
            loading={loading}
          />
        </form>

        <div className="text-white text-center mt-2 text-sm">
          Didn’t receive a code?{" "}
          <span
            onClick={resendVerificationCode}
            className="text-primary hover:underline cursor-pointer text-base font-semibold"
          >
            Resend Code
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
