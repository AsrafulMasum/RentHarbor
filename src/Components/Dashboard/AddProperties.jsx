import { FaImage } from "react-icons/fa";
import Button from "../Button";
import { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import axios from "axios";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const imgHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

function AddProperties() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    propertyPhoto: [],
    price: "",
    location: "",
    squareFeet: "",
    category: "",
    bedrooms: "",
    bathrooms: "",
    masterRoom: "",
    childRoom: "",
    amenities: "",
    features: "",
    numberOfBalconies: "",
    kitchen: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    latitude: "",
    longitude: "",
  });

  const [imageUrl, setImageUrl] = useState([]);

  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    if (name === "propertyPhoto") {
      const imgFiles = Array.from(files);

      if (imgFiles.length > 0) {
        try {
          setLoading(true);
          const uploadedUrls = await Promise.all(imgFiles.map(uploadToImgBB));

          setImageUrl(uploadedUrls);
          setLoading(false);
        } catch (error) {
          console.error("Error uploading images:", error);
          setLoading(false);
        }
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(imgHostingApi, formData);
      return res.data.success ? res.data.data.url : null;
    } catch (error) {
      console.error("Error uploading to ImgBB:", error);
      toast.error("Error uploading images. Try again!");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const amenitiesArray = formData.amenities
        .split(",")
        .map((amenity) => amenity.trim());

      const featuresArray = formData.features
        .split(",")
        .map((amenity) => amenity.trim());

      const finalPropertyData = {
        ...formData,
        propertyPhoto: imageUrl,
        price: parseFloat(formData.price) || 0,
        squareFeet: parseFloat(formData.squareFeet) || 0,
        bedrooms: parseFloat(formData.bedrooms) || 0,
        bathrooms: parseFloat(formData.bathrooms) || 0,
        masterRoom: parseFloat(formData.masterRoom) || 0,
        childRoom: parseFloat(formData.childRoom) || 0,
        numberOfBalconies: parseFloat(formData.numberOfBalconies) || 0,
        kitchen: parseFloat(formData.kitchen) || 0,
        latitude: parseFloat(formData.latitude) || 0,
        longitude: parseFloat(formData.longitude) || 0,
        amenities: amenitiesArray,
        features: featuresArray,
        availableDates: state?.[0],
        host: {
          hostId: user?._id,
          hostName: user?.name,
          email: user?.email,
          phone: user?.phone,
          photoURL: user?.photo_url,
        },
      };

      const res = await axiosSecure.post(
        "/properties/addProperty",
        finalPropertyData
      );

      if (res?.data?.success) {
        toast.success("Your property added successfully.");
        setLoading(false);
        navigate("/dashboard/myListings");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  return (
    <div className="w-5/6">
      <form
        onSubmit={handleSubmit}
        className="p-10 max-h-screen overflow-y-scroll w-full"
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Property
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Property Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about your Property.
                </p>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="productPhoto"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Property Photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-32">
                  <div className="text-center">
                    <FaImage
                      aria-hidden="true"
                      className="mx-auto h-12 w-12 text-gray-300"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="propertyPhoto"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2  focus-within:ring-offset-2 hover:text-secondary"
                      >
                        <span>Upload a file</span>
                        <input
                          id="propertyPhoto"
                          name="propertyPhoto"
                          type="file"
                          multiple
                          onChange={handleChange}
                          className="sr-only"
                          required
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-3 sm:ml-10">
                <p className="mb-3 text-sm font-medium leading-6 text-gray-900">
                  Available Dates
                </p>
                <DateRange
                  rangeColors={["#FD6C23"]}
                  editableDateInputs={true}
                  onChange={(date) => setState([date.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  minDate={new Date()}
                />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price / Day
                </label>
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    type="number"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="bedrooms"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Bedrooms
                </label>
                <div className="mt-2">
                  <input
                    id="bedrooms"
                    name="bedrooms"
                    type="number"
                    required
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="bathrooms"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Bathrooms
                </label>
                <div className="mt-2">
                  <input
                    id="bathrooms"
                    name="bathrooms"
                    type="number"
                    required
                    value={formData.bathrooms}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="masterRoom"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Master Room
                </label>
                <div className="mt-2">
                  <input
                    id="masterRoom"
                    name="masterRoom"
                    type="number"
                    required
                    value={formData.masterRoom}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="childRoom"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Child Room
                </label>
                <div className="mt-2">
                  <input
                    id="childRoom"
                    name="childRoom"
                    type="number"
                    required
                    value={formData.childRoom}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="numberOfBalconies"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Balconies
                </label>
                <div className="mt-2">
                  <input
                    id="numberOfBalconies"
                    name="numberOfBalconies"
                    type="number"
                    required
                    value={formData.numberOfBalconies}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="kitchen"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Kitchen
                </label>
                <div className="mt-2">
                  <input
                    id="kitchen"
                    name="kitchen"
                    type="number"
                    required
                    value={formData.kitchen}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-5">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Location
                </label>
                <div className="mt-2">
                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <input
                    id="category"
                    name="category"
                    type="text"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="features"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Features
                </label>
                <div className="mt-2">
                  <input
                    id="features"
                    name="features"
                    type="text"
                    required
                    value={formData.features}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="amenities"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Amenities
                </label>
                <div className="mt-2">
                  <input
                    id="amenities"
                    name="amenities"
                    type="text"
                    required
                    value={formData.amenities}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="squareFeet"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Square Feet
                </label>
                <div className="mt-2">
                  <input
                    id="squareFeet"
                    name="squareFeet"
                    type="number"
                    required
                    value={formData.squareFeet}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <p className="col-span-full mt-3 text-sm font-medium leading-6 text-gray-900 border-b border-gray-900/10 pb-4">
                Address
              </p>

              <div className="sm:col-span-3">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street
                </label>
                <div className="mt-2">
                  <input
                    id="street"
                    name="street"
                    type="text"
                    required
                    value={formData.street}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State
                </label>
                <div className="mt-2">
                  <input
                    id="state"
                    name="state"
                    type="text"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Zip
                </label>
                <div className="mt-2">
                  <input
                    id="zip"
                    name="zip"
                    type="number"
                    required
                    value={formData.zip}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="latitude"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Latitude
                </label>
                <div className="mt-2">
                  <input
                    id="latitude"
                    name="latitude"
                    type="text"
                    required
                    value={formData.latitude}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="longitude"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Longitude
                </label>
                <div className="mt-2">
                  <input
                    id="longitude"
                    name="longitude"
                    type="number"
                    required
                    value={formData.longitude}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button
            loading={loading}
            text="Add Propertry"
            style="btn-wide bg-primary text-white border border-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default AddProperties;
