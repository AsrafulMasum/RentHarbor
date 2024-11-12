import { Link } from "react-router-dom";
import Title from "../Title";
// import img from "./../../assets/houses/house.jpg";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useLoadPublicData from "../../Hooks/useLoadPublicData";

const FeaturedProperties = () => {
  const { data } = useLoadPublicData("/properties/allProperties");
  const properties = data?.properties;

  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto my-20">
      <Title
        title="Featured Properties"
        subTitle="Your Next Home Awaits – Explore Our Featured Picks"
        desc="Discover top properties, handpicked for their quality, location, and value. Find your perfect home here."
      />
      <div className="flex justify-center items-center flex-wrap gap-10 mt-16 w-full">
        <Swiper
          style={{
            "--swiper-pagination-color": "#FD6C23",
          }}
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {properties?.map((property) => (
            <SwiperSlide
              key={property?.propertyId}
              className="overflow-hidden pb-10"
            >
              <Link className="duration-700 group overflow-hidden h-96">
                <img
                  className="group-hover:scale-105 duration-700"
                  src={property?.images?.[0]}
                  alt="Image"
                />
                <div className="py-6 px-6 flex flex-col gap-2 bg-secondary">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-semibold text-primary">
                      {property?.title}
                    </h4>
                    <p className="text-primary font-semibold">
                      $ {property?.pricePerDay}
                    </p>
                  </div>
                  <p className="text-white">
                    <span className="font-semibold">Location: </span>
                    {property?.location}, {property?.address?.city},{" "}
                    {property?.address?.state}
                  </p>

                  <p className="text-white">{property?.features?.join(", ")}</p>
                </div>
                {/* <span className="text-white w-14 bg-secondary px-2 py-1 rounded-full font-semibold absolute top-56 right-10">
                  $ 117
                </span> */}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProperties;
