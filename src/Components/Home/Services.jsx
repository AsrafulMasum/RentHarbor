import Title from "../Title";
import { FaHouse } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto my-16">
      <Title
        title="Our services"
        subTitle="RentHarbor Tailored to Your Needs"
        desc="Streamlined booking, attentive support, and personalized amenities—our rental house services ensure a stress-free and comfortable stay."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-10 mt-16">
        <div className="p-10 border text-center flex flex-col justify-center items-center gap-4 shadow-md hover:shadow-xl duration-700 group h-96 hover:rounded-bl-[100px] hover:rounded-tr-[100px]">
          <FaHouse className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold my-4">Rent Property</h4>
          <p>Find your perfect rental property effortlessly. Browse listings, view photos, and secure your next home hassle-free.</p>
        </div>

        <div className="p-10 border text-center flex flex-col justify-center items-center gap-4 shadow-md hover:shadow-xl duration-700 group h-96 hover:rounded-bl-[100px] hover:rounded-tr-[100px]">
          <MdApartment className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold my-4">Buy / Sell Apartment</h4>
          <p>Effortlessly buy or sell apartments with our seamless platform. Find your perfect match or close deals with ease.</p>
        </div>

        <div className="p-10 border text-center flex flex-col justify-center items-center gap-4 shadow-md hover:shadow-xl duration-700 group h-96 hover:rounded-bl-[100px] hover:rounded-tr-[100px]">
          <RiSecurePaymentFill className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold my-4">Secure Payments</h4>
          <p>Trust our secure payment system for peace of mind. Your transactions, always safe, seamless, reliable, and secure every time.</p>
        </div>

        <div className="p-10 border text-center flex flex-col justify-center items-center gap-4 shadow-md hover:shadow-xl duration-700 group h-96 hover:rounded-bl-[100px] hover:rounded-tr-[100px]">
          <BiSupport className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold my-4">Online Support</h4>
          <p>Get instant assistance with our online support. Our team is here to help you with any questions or issues you may have.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
