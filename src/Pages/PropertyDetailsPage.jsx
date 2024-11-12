import { useParams } from "react-router-dom";
import useLoadPublicData from "../Hooks/useLoadPublicData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function PropertyDetailsPage() {
  const { id } = useParams();

  const { data } = useLoadPublicData(`properties/${id}`);
  const property = data?.property;
  console.log(typeof (property?.images));

  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto mt-28">
      {/* <Swiper
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
        {property?.images?.map((img, idx) => (
          <SwiperSlide key={idx} className="overflow-hidden pb-10">
            <img
              className="w-4/6 h-80 mx-auto"
              src={img}
              alt="propertyImg"
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}

export default PropertyDetailsPage;
