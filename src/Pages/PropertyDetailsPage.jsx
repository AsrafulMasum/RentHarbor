import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MdOutlineBedroomParent,
  MdOutlineBedroomChild,
  MdOutlineBathroom,
  MdBalcony,
} from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";
import { LuScale3D } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import AvailableDateSelector from "../Components/PropertyDeatails/AvailableDateSelector";
import MapComponent from "../Components/PropertyDeatails/MapComponent";
import { useEffect, useState } from "react";
import Button from "../Components/Button";
import { Modal } from "antd";
import useLoadSecureData from "../Hooks/useLoadSecureData";

function PropertyDetailsPage() {
  const { id } = useParams();
  const [dates, setDates] = useState({});
  const [days, setDays] = useState({});
  const [totalCost, setTotalCost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useLoadSecureData(`/properties/${id}`);
  const property = data?.property;

  const handleBook = () => {
    const bookingTime = dates?.[0]?.endDate - dates?.[0]?.startDate;
    const bookingDays = Math.floor(bookingTime / (1000 * 60 * 60 * 24)) + 1;
    setDays(bookingDays);
    const totalCost = bookingDays * property?.pricePerDay;
    setTotalCost(totalCost);
    setShowModal(true);
  };

  const handleConfirm = () => {
    console.log("first");
  };

  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5">
        {/* Image Slider */}
        <div className="lg:col-span-2">
          {property && (
            <Swiper
              style={{
                "--swiper-navigation-color": "#FD6C23",
              }}
              slidesPerView={"auto"}
              loop={true}
              modules={[Navigation, Autoplay]}
              navigation={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="rounded-lg m-0"
            >
              {property?.images?.map((img, idx) => (
                <SwiperSlide key={idx} className="overflow-hidden">
                  <img
                    className="w-full h-96 object-cover rounded-lg"
                    src={img}
                    alt="propertyImg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Property details */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-medium text-primary">
            {property?.title}{" "}
          </h2>
          <p className="text-gray-700 mt-2">
            {property?.address?.street}, {property?.address?.state},{" "}
            {property?.address?.city} - {property?.address?.zip}
          </p>
          <p className="text-lg mt-2 text-secondary">
            {property?.location}{" "}
            <span className="text-sm">({property?.category})</span>
          </p>

          <div className="grid grid-cols-2 justify-between gap-4">
            <div className="flex items-center gap-10 mt-5 group relative">
              <MdOutlineBedroomParent className="text-4xl text-secondary" />
              <p className="text-lg font-bold">{property?.masterRoom}</p>
              <p className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded">
                Master_Room
              </p>
            </div>
            <div className="flex items-center gap-10 mt-5 group relative">
              <MdOutlineBedroomChild className="text-4xl text-secondary" />
              <p className="text-lg font-bold">{property?.childRoom}</p>
              <p className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded">
                Child_Room
              </p>
            </div>
            <div className="flex items-center gap-10 mt-5 group relative">
              <FaKitchenSet className="text-4xl text-secondary" />
              <p className="text-lg font-bold">{property?.kitchen}</p>
              <p className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded">
                Kitchen
              </p>
            </div>
            <div className="flex items-center gap-10 mt-5 group relative">
              <MdOutlineBathroom className="text-4xl text-secondary" />
              <p className="text-lg font-bold">{property?.bathrooms}</p>
              <p className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded">
                Bathrooms
              </p>
            </div>
            <div className="flex items-center gap-10 mt-5 group relative">
              <MdBalcony className="text-4xl text-secondary" />
              <p className="text-lg font-bold">{property?.numberOfBalconies}</p>
              <p className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded">
                Balconies
              </p>
            </div>
            <div className="flex items-center gap-10 mt-5 group relative">
              <LuScale3D className="text-4xl text-secondary" />
              <p className="text-lg font-bold">
                {property?.squareFeet} m<sup>2</sup>
              </p>
              <p className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded">
                Square_Feet
              </p>
            </div>
          </div>
          <p className="mt-5 text-lg font-bold text-secondary">
            {property?.amenities?.join(", ")}, {property?.features?.join(", ")}.
          </p>
        </div>

        {/* Host details */}
        <div className="flex items-center gap-5 lg:col-span-2">
          <img className="w-16 rounded-full" src="../user.jpg" alt="" />
          <div className="flex-1">
            <h4 className="text-lg font-medium">{property?.host?.hostName}</h4>
            <p>{property?.host?.email}</p>
          </div>
          <div className="mx-5 flex flex-col items-end">
            <ReactStars
              count={5}
              value={4.9}
              isHalf={true}
              edit={false}
              // onChange={ratingChanged}
              size={24}
              activeColor="#FD6C23"
            />
            <div className="flex items-center gap-4">
              <IoCallOutline className="text-3xl bg-primary p-1 rounded-lg text-white" />
              <p>{property?.host?.phone}</p>
            </div>
          </div>
        </div>

        {/* Property description */}
        <p>{property?.description}</p>
      </div>

      <div className="mb-10 mt-20 grid grid-cols-3 gap-x-10">
        <div className="col-span-2">
          <MapComponent
            latitude={property?.address?.latitude}
            longitude={property?.address?.longitude}
          />
        </div>

        <div>
          <AvailableDateSelector
            setDates={setDates}
            availableDates={property?.availableDates}
          />
        </div>
        <div className="flex justify-end col-span-3 mr-10">
          <Button
            fn={handleBook}
            text="Book Now"
            style="btn-wide bg-primary text-white border border-primary w-80"
          />
        </div>
      </div>
      <Modal
        centered
        open={showModal}
        onCancel={() => setShowModal(false)}
        width={400}
        footer={false}
      >
        <div className="p-4">
          <h4 className="text-primary text-2xl font-semibold">
            {property?.title}
          </h4>
          <p className="py-2 font-medium">
            Price per night: ${property?.pricePerDay}
          </p>
          <p className="pb-2 font-medium">Total night to stay: {days}</p>
          <hr />
          <p className="pt-2 pb-4 font-medium">Total Cost: ${totalCost}</p>
          <Button
            fn={handleConfirm}
            text="Confirm"
            style="btn-wide bg-primary text-white border border-primary w-full"
          />
        </div>
      </Modal>
    </div>
  );
}

export default PropertyDetailsPage;
