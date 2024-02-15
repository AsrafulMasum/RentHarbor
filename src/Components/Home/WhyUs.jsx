import img from "../../assets/home.png";
import { GrCheckboxSelected } from "react-icons/gr";

const WhyUs = () => {
  return (
    <div className="bg-secondary py-10">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 max-w-screen-xl mx-4 lg:mx-auto">
        <div className="flex-1 lg:w-2/5">
          <img src={img} alt="Home" />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl text-primary font-semibold">
            Why you should choose us?
          </h2>
          <p className="text-white">
            Welcome to RentHarbor, your premier destination for finding the
            perfect home rental tailored to your unique lifestyle. Whether
            you&#39;re seeking a cozy apartment in the heart of the city, a
            spacious family home in a peaceful suburban neighborhood, or a
            luxurious vacation rental by the beach, we&#39;re here to simplify
            your search and make the process of finding your ideal home
            effortless. With a diverse range of listings, intuitive search
            tools, and expert guidance, we&#39;re committed to helping you
            discover the home that suits your needs, preferences, and budget.
            Begin your journey towards finding your dream rental today with
            RentHarbor.
          </p>
          <div className="text-white grid grid-cols-2 gap-2 font-semibold">
            <div className="flex items-center gap-2">
              <GrCheckboxSelected className="text-primary text-lg" />
              <p>World class</p>
            </div>
            <div className="flex items-center gap-2">
              <GrCheckboxSelected className="text-primary text-lg" />
              <p>Affordable</p>
            </div>
            <div className="flex items-center gap-2">
              <GrCheckboxSelected className="text-primary text-lg" />
              <p>Trusted</p>
            </div>
            <div className="flex items-center gap-2">
              <GrCheckboxSelected className="text-primary text-lg" />
              <p>Amenities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
