import Title from "../Title";
import { FaHouse } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto">
      <Title
        title="Our services"
        subTitle="RentHarbor Tailored to Your Needs"
        desc="Streamlined booking, attentive support, and personalized amenities—our rental house services ensure a stress-free and comfortable stay."
      />
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 mt-10">
        <div className="border rounded-tl-[100px] rounded-br-[100px] p-10 text-center flex flex-col justify-center items-center gap-2 hover:bg-secondary hover:text-white duration-500 group lg:w-1/4 h-80">
          <FaHouse className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold">Rent Property</h4>
          <p>Find your perfect rental property effortlessly. Browse listings, view photos, and secure your next home hassle-free.</p>
        </div>

        <div className="border rounded-tl-[100px] rounded-br-[100px] p-10 text-center flex flex-col justify-center items-center gap-2 hover:bg-secondary hover:text-white duration-500 group lg:w-1/4 h-80">
          <MdApartment className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold">Buy / Sell Apartment</h4>
          <p>Effortlessly buy or sell apartments with our seamless platform. Find your perfect match or close deals with ease.</p>
        </div>

        <div className="border rounded-tl-[100px] rounded-br-[100px] p-10 text-center flex flex-col justify-center items-center gap-2 hover:bg-secondary hover:text-white duration-500 group lg:w-1/4 h-80">
          <RiSecurePaymentFill className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold">Secure Payments</h4>
          <p>Trust our secure payment system for peace of mind. Your transactions, always safe, seamless, reliable, and secure every time.</p>
        </div>

        <div className="border rounded-tl-[100px] rounded-br-[100px] p-10 text-center flex flex-col justify-center items-center gap-2 hover:bg-secondary hover:text-white duration-500 group lg:w-1/4 h-80">
          <BiSupport className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold">Online Support</h4>
          <p>Get instant assistance with our online support. Our team is here to help you with any questions or issues you may have.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
