import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../Button";
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
                "url(https://i.postimg.cc/xTdkbR8B/barn-cat.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-neutral-content">
              <div>
                <h1 className="mb-5 text-2xl font-bold text-primary">
                  WELCOME TO OUR HOUSE RENT
                </h1>
                <p className="mb-5">
                  Welcome to RentHarbor, your premier destination for finding
                  the perfect home rental tailored to your unique lifestyle.
                  Whether you&#39;re seeking a cozy apartment in the heart of
                  the city, a spacious family home in a peaceful suburban
                  neighborhood, or a luxurious vacation rental by the beach,
                  we&#39;re here to simplify your search and make the process of
                  finding your ideal home effortless. With a diverse range of
                  listings, intuitive search tools, and expert guidance,
                  we&#39;re committed to helping you discover the home that
                  suits your needs, preferences, and budget. Begin your journey
                  towards finding your dream rental today with RentHarbor.
                </p>
                <div className="flex gap-4">
                  <Button
                    text="Property"
                    style="btn-wide bg-secondary border-none"
                  ></Button>
                  <Button
                    text="Contact Us"
                    style="btn-wide bg-transparent"
                  ></Button>
                </div>
              </div>
            </div>
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
            <div className="hero-overlay bg-opacity-30"></div>
            <Slider />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/cLFjDdBF/camping-cat.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
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
            <div className="hero-overlay bg-opacity-30"></div>
            <Slider />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
