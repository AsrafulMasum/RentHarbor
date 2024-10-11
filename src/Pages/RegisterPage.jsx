import { useEffect, useState } from "react";
import bgImage from "../assets/house.jpg";
import addImage from "../assets/addImage.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
// import PhoneInput from "react-phone-input-2";

const imgHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

const RegisterPage = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  // getting formData
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  const [passwordMatch, setPasswordMatch] = useState(true);
  // const [phone, setPhone] = useState("");

  // matching password
  useEffect(() => {
    setPasswordMatch(
      formData.password === formData.confirmPassword ||
        formData.confirmPassword === ""
    );
  }, [formData]);

  // handling submission
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const imageFile = { image: formData?.profileImage };
    try {
      const res = await axiosPublic.post(imgHostingApi, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const photoURL = res.data.data.display_url;

      if (res?.data?.success) {
        try {
          const userData = {
            name: formData?.name,
            email: formData?.email,
            password: formData?.password,
            photo_url: photoURL,
            role: "Guest",
            phone: formData?.phone,
          };
          const res = await axiosPublic.post("/auth/register", userData);

          if (res.data?.success) {
            toast.success("You have registered successfully.");
            setLoading(false);
            navigate("/login");
          }
        } catch (err) {
          setLoading(false);
          console.log("Registration failed", err.message);
          if (err.response.status === 409) {
            toast.error("User already exists!");
          } else {
            toast.error("Something went wrong! Try again.");
          }
        }
      }
    } catch (err) {
      setLoading(false);
      console.log("Image upload failed", err.message);
    }
  };

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-start"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center gap-4 w-4/5 lg:w-1/2 px-40 bg-black min-h-screen pt-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 2xl:gap-10"
        >
          <input
            className="w-full px-4 py-2 bg-transparent text-white border-b border-gray-400 border-opacity-60 outline-none placeholder:text-white"
            placeholder="Name"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-2 bg-transparent text-white border-b border-gray-400 border-opacity-60 outline-none placeholder:text-white"
            placeholder="Phone"
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
            {/* <PhoneInput
              inputProps={{
                required: true,
              }}
              containerClass="w-full px-4 py-2 bg-transparent text-white border-b border-gray-400 border-opacity-60 outline-none placeholder:text-white"
              inputClass="bg-transparent w-full outline-none"
              country={"bd"}
              value={phone}
              onChange={setPhone}
            /> */}
          <input
            className="w-full px-4 py-2 bg-transparent text-white border-b border-gray-400 border-opacity-60 outline-none placeholder:text-white"
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-2 bg-transparent text-white border-b border-gray-400 border-opacity-60 outline-none placeholder:text-white"
            placeholder="Password"
            type="password"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-2 bg-transparent text-white border-b border-gray-400 border-opacity-60 outline-none placeholder:text-white"
            placeholder="Confirm Password"
            type="password"
            required
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {!passwordMatch && (
            <p style={{ color: "red" }}>Passwords are not matched!</p>
          )}

          <input
            className="w-full px-4 bg-transparent text-white outline-none placeholder:text-white"
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            required
            onChange={handleChange}
          />
          <div className="flex flex-col justify-center items-center gap-2 cursor-pointer text-white text-sm">
            <label
              htmlFor="image"
              className="flex flex-col justify-center items-center gap-2 cursor-pointer text-white text-sm"
            >
              <img className="w-6" src={addImage} alt="add profile photo" />
              <p>Upload Your Photo</p>
            </label>
          </div>

          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            />
          )}

          <Button
            text="Register"
            style="w-full bg-primary font-bold text-base text-white border-0"
            loading={loading}
          />
        </form>
        <div className="text-white text-center mt-2 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary hover:underline text-base font-semibold"
          >
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
