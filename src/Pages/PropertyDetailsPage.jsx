import { useParams } from "react-router-dom";
import useLoadPublicData from "../Hooks/useLoadPublicData";
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
import { Navigation } from "swiper/modules";

function PropertyDetailsPage() {
  const { id } = useParams();

  const { data } = useLoadPublicData(`properties/${id}`);
  const property = data?.property;
  console.log(property);

  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto mt-32">
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
              modules={[Navigation]}
              navigation={{
                clickable: true,
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
          <h2 className="text-3xl font-medium text-secondary">
            {property?.title}{" "}
          </h2>
          <p className="text-gray-700 mt-2">
            {property?.address?.street}, {property?.address?.state},{" "}
            {property?.address?.city} - {property?.address?.zip}
          </p>
          <p className="text-lg mt-2">
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
          <p className="mt-5 text-lg font-bold">
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          mollitia maiores quisquam, excepturi magni, repellendus ullam,
          laudantium in numquam vero reprehenderit.
        </p>
      </div>
    </div>
  );
}

export default PropertyDetailsPage;
