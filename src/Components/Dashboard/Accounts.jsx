import { useEffect, useRef, useState } from "react";
import { Input, ConfigProvider, Tabs } from "antd";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Button from "../Button";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const imgHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;

function Accounts() {
  const axiosSecure = useAxiosSecure();
  const { user, getUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    photo_url: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const userId = user?._id;

  // Text field change handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
  };

  // Upload to imgbb
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgHostingKey}`,
        formData,
      );

      const imageURL = res.data.data.url;

      setForm((prev) => ({
        ...prev,
        photo_url: imageURL,
      }));

      toast.success("Image uploaded!");
    } catch (err) {
      toast.error("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  // Update profile
  const handleUpdate = async () => {
    setUploading(true);
    try {
      const res = await axiosSecure.put(`/auth/update-user/${userId}`, form);
      if (res.data.success) {
        toast.success("Profile updated!");
        getUser();
      }
    } catch (err) {
      toast.error("Update failed!");
    } finally {
      setUploading(false);
    }
  };

  // Update password
  const handlePasswordUpdate = async () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }

    try {
      const res = await axiosSecure.put(`/auth/update-Password/${userId}`, {
        oldPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
      });

      if (res.data.success) {
        toast.success("Password updated successfully!");
        setPasswordForm({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Password update failed");
    }
  };

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        phone: user.phone || "",
        photo_url: user.photo_url || "",
      });
    }
  }, [user]);

  return (
    <div className="w-full h-full flex justify-center max-w-xl mx-auto py-10 px-4 pt-20 max-h-screen overflow-y-auto">
      <ConfigProvider theme={{ token: { colorPrimary: "#FD6C23" } }}>
        <Tabs
          defaultActiveKey="1"
          centered
          className="w-full"
          items={[
            {
              key: "1",
              label: "Profile Update",
              children: (
                <div className="flex flex-col gap-6 w-full">
                  {/* Image Upload */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-32 h-32 rounded-full border-2 border-gray-300 
                    flex items-center justify-center cursor-pointer relative 
                    overflow-hidden hover:opacity-80 transition"
                      onClick={() => fileInputRef.current.click()}
                    >
                      {form.photo_url ? (
                        <img
                          src={form.photo_url}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-500 text-sm">
                          Upload Photo
                        </span>
                      )}

                      {uploading && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-sm">
                          Uploading...
                        </div>
                      )}
                    </div>

                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />

                    <p className="text-sm text-gray-400 mt-2">
                      Click to upload
                    </p>
                  </div>

                  {/* Inputs */}
                  <ConfigProvider
                    theme={{
                      components: {
                        Input: {
                          hoverBorderColor: "#FD6C23",
                        },
                      },
                    }}
                  >
                    <Input
                      placeholder="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      size="large"
                      className="h-12"
                    />

                    <Input
                      placeholder="Phone Number"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      size="large"
                      className="h-12"
                    />
                  </ConfigProvider>

                  <Button
                    fn={handleUpdate}
                    text="Update Details"
                    loading={uploading}
                    style="bg-primary text-white py-2 px-4 rounded-lg font-semibold border hover:text-primary"
                  />
                </div>
              ),
            },

            // PASSWORD TAB
            {
              key: "2",
              label: "Change Password",
              children: (
                <div className="flex flex-col gap-6 w-full mt-4">
                  <Input.Password
                    placeholder="Current Password"
                    name="currentPassword"
                    value={passwordForm.currentPassword}
                    onChange={handlePasswordChange}
                    size="large"
                    className="h-12"
                  />

                  <Input.Password
                    placeholder="New Password"
                    name="newPassword"
                    value={passwordForm.newPassword}
                    onChange={handlePasswordChange}
                    size="large"
                    className="h-12"
                  />

                  <Input.Password
                    placeholder="Confirm New Password"
                    name="confirmPassword"
                    value={passwordForm.confirmPassword}
                    onChange={handlePasswordChange}
                    size="large"
                    className="h-12"
                  />

                  <Button
                    fn={handlePasswordUpdate}
                    text="Change Password"
                    style="bg-primary text-white py-2 px-4 rounded-lg font-semibold border hover:text-primary"
                  />
                </div>
              ),
            },
          ]}
        />
      </ConfigProvider>
    </div>
  );
}

export default Accounts;

