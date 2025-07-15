import { Link } from "react-router-dom";
import Title from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import useLoadPublicData from "../../Hooks/useLoadPublicData";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import PropertyCard from "../shared/PropertyCard";

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
          modules={[Pagination, Autoplay]}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
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
              key={property?._id}
              className="overflow-hidden pb-10 rounded-lg relative"
            >
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProperties;
