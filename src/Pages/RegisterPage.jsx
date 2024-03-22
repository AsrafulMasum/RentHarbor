import { useEffect, useState } from "react";
import bgImage from "../assets/register.jpg";
import addImage from "../assets/addImage.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const imgHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

const RegisterPage = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
            firstName: formData?.firstName,
            lastName: formData?.lastName,
            email: formData?.email,
            password: formData?.password,
            photo_url: photoURL,
          };
          const res = await axiosPublic.post("/auth/register", userData);
          if (res.data?.success) {
            setLoading(false);
            navigate("/login");
          }
        } catch (err) {
          console.log("Registration failed", err.message);
        }
      }
    } catch (err) {
      console.log("Image upload failed", err.message);
    }
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
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <input
            className="w-full px-4 py-2 bg-transparent text-center text-white border-b border-gray-400 outline-none placeholder:text-white"
            placeholder="First Name"
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-2 bg-transparent text-center text-white border-b border-gray-400 outline-none placeholder:text-white"
            placeholder="Last Name"
            required
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-2 bg-transparent text-center text-white border-b border-gray-400 outline-none placeholder:text-white"
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-2 bg-transparent text-center text-white border-b border-gray-400 outline-none placeholder:text-white"
            placeholder="Password"
            type="password"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-2 bg-transparent text-center text-white border-b border-gray-400 outline-none placeholder:text-white"
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
            className="w-full px-4 py-2 bg-transparent text-center text-white border-b border-gray-400 outline-none placeholder:text-white"
            id="image"
            type="file"
            name="profileImage"
            accept="image/*"
            style={{ display: "none" }}
            required
            onChange={handleChange}
          />
          <label
            htmlFor="image"
            className="flex flex-col justify-center items-center gap-2 cursor-pointer text-white text-sm"
          >
            <img className="w-6" src={addImage} alt="add profile photo" />
            <p>Upload Your Photo</p>
          </label>

          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="profile photo"
              style={{ maxWidth: "80px" }}
            />
          )}

          <Button text="Register" style="w-1/2 mt-4 bg-transparent text-white" loading={loading} />
        </form>
        <div className="text-center">
          <Link
            className="text-white text-center mt-2 text-sm hover:underline"
            to="/login"
          >
            Already have an account? Log In Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
