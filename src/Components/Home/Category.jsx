import { FaHouse } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import Title from "../Title";

const Category = () => {
  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto my-10">
      <Title
        title="Property Category"
        subTitle="Discover Your Ideal Property Today"
        desc="Find your dream home with ease! Browse our curated collection of rental properties to find the perfect fit for your lifestyle."
      />
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 mt-16">
        <div className="p-10 border text-center flex flex-col justify-center items-center gap-4 shadow-md hover:shadow-xl duration-700 group lg:w-1/4 h-[450px] hover:rounded-bl-[80px] hover:rounded-tr-[80px]">
          <FaHouse className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold">House</h4>
          <p className="my-4">
            Discover your sanctuary! Explore our range of houses for rent or
            buy, each offering unique features and amenities to suit your needs.
            Find your ideal home today.
          </p>
          <button className="btn px-4 bg-transparent cursor-pointer rounded-lg font-semibold border group-hover:text-primary duration-500 btn-sm">Check it</button>
        </div>

        <div className="p-10 border text-center flex flex-col justify-center items-center gap-4 shadow-md hover:shadow-xl duration-700 group lg:w-1/4 h-[450px] hover:rounded-bl-[80px] hover:rounded-tr-[80px]">
          <MdApartment className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold">Apartment</h4>
          <p className="my-4">
            Elevate your urban living experience! Dive into our selection of
            apartments for rent or buy, featuring modern amenities and prime
            locations to match your lifestyle.
          </p>
          <button className="btn px-4 bg-transparent cursor-pointer rounded-lg font-semibold border group-hover:text-primary duration-500 btn-sm">Check it</button>
        </div>

        <div className="p-10 border text-center flex flex-col justify-center items-center gap-4 shadow-md hover:shadow-xl duration-700 group lg:w-1/4 h-[450px] hover:rounded-bl-[80px] hover:rounded-tr-[80px]">
          <FaWarehouse className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold">Warehouse</h4>
          <p className="my-4">
            Unlock space for your business! Explore our warehouse rentals,
            offering ample storage and versatile layouts to accommodate your
            growing needs.
          </p>
          <button className="btn px-4 bg-transparent cursor-pointer rounded-lg font-semibold border group-hover:text-primary duration-500 btn-sm">Check it</button>
        </div>

        <div className="p-10 border text-center flex flex-col justify-center items-center gap-4 shadow-md hover:shadow-xl duration-700 group lg:w-1/4 h-[450px] hover:rounded-bl-[80px] hover:rounded-tr-[80px]">
          <HiBuildingOffice2 className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold">Home Office</h4>
          <p className="my-4">
            Elevate your business with premium office rentals. Tailored
            environments, strategic locations, and premium amenities await.
          </p>
          <button className="btn px-4 bg-transparent cursor-pointer rounded-lg font-semibold border group-hover:text-primary duration-500 btn-sm">Check it</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
