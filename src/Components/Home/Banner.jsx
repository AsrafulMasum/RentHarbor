import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="max-h-screen overflow-hidden w-screen">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
      >
        <SwiperSlide>
          <img src="https://i.postimg.cc/xTdkbR8B/barn-cat.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/4xGsC4tZ/beach-cat.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/cLFjDdBF/camping-cat.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/prQcKvdY/lux-cat.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/Bnn7PdfH/skiing-cat.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
