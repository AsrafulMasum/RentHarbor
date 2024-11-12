import { useParams } from "react-router-dom";
import useLoadPublicData from "../Hooks/useLoadPublicData";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

function PropertyDetailsPage() {
  const { id } = useParams();

  const { data } = useLoadPublicData(`properties/${id}`);
  const property = data?.property;

  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto mt-28">
      {property && (
        <Swiper
          style={{
            "--swiper-navigation-color": "#FD6C23",
          }}
          slidesPerView={'auto'}
          spaceBetween={30}
          loop={true}
          modules={[Navigation]}
          navigation={{
            clickable: true,
          }}
          className="md:w-4/6 mx-auto rounded-lg"
        >
          {property?.images?.map((img, idx) => (
            <SwiperSlide key={idx} className="overflow-hidden pb-10">
              <img className="w-full h-96 object-cover rounded-lg" src={img} alt="propertyImg" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default PropertyDetailsPage;
