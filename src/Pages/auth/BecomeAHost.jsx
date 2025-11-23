import { useState } from "react";
import Button from "../../Components/Button";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const BecomeAHost = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState({
    nidOrPassport: null,
    addressProof: null,
    certification: null,
  });

  const handleFileChange = (e) => {
    const { name, files: selected } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: selected[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("nidOrPassport", files.nidOrPassport);
      formData.append("addressProof", files.addressProof);
      formData.append("certification", files.certification);

      const userId = user?._id;

      const res = await axios.post(
        `http://localhost:5000/auth/request-host/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Host request submitted!");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Become a Host
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Submit your documents to apply for hosting access.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* NID / Passport */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              NID / Passport (PDF or Image)
            </label>
            <input
              type="file"
              name="nidOrPassport"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-3 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-white hover:file:bg-secondary"
            />
          </div>

          {/* Address Proof */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Address Proof (Utility Bill / Rent Agreement)
            </label>
            <input
              type="file"
              name="addressProof"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-3 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-white hover:file:bg-secondary"
            />
          </div>

          {/* Certification */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Additional Certification (Optional)
            </label>
            <input
              type="file"
              name="certification"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-3 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-white hover:file:bg-secondary"
            />
          </div>

          {/* Submit Button */}
          <Button
            loading={loading}
            text="Submit Application"
            style="btn w-full border-tertiary hover:border-transparent bg-primary text-white text-lg font-semibold h-12"
          />
        </form>
      </div>
    </div>
  );
};

export default BecomeAHost;
