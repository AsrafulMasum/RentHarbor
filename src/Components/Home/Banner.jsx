import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <Swiper
        slidesPerView={1}
        cssMode={true}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/cLFjDdBF/camping-cat.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
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
            <div className="hero-overlay bg-opacity-50"></div>
            <Slider />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/xTdkbR8B/barn-cat.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
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
            <div className="hero-overlay bg-opacity-50"></div>
            <Slider />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
