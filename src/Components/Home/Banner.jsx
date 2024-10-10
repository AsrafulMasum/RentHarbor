import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Swiper
        slidesPerView={1}
        cssMode={true}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        {/* slider */}
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/J7J3dTvL/house.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            
            <Slider />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/4xGsC4tZ/beach-cat.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <Slider />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/s2RwT6s6/warehouse.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <Slider />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.postimg.cc/prQcKvdY/lux-cat.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <Slider />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
