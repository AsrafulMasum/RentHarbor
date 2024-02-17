import { FaHouse } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import Title from "../Title";
import Button from "../Button";

const Category = () => {
  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto">
      <Title
        title="Property Category"
        subTitle="Discover Your Ideal Property Today"
        desc="Find your dream home with ease! Browse our curated collection of rental properties to find the perfect fit for your lifestyle."
      />
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 mt-10">
        <div className="p-10 border rounded-tr-[100px] rounded-bl-[100px] text-center flex flex-col justify-center items-center gap-2 hover:bg-secondary hover:text-white duration-500 group lg:w-1/4 h-96">
          <FaHouse className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold">House</h4>
          <p>
            Discover your sanctuary! Explore our range of houses for rent or
            buy, each offering unique features and amenities to suit your needs.
            Find your ideal home today.
          </p>
          <Button text="Check it" style="bg-transparent btn-sm" />
        </div>

        <div className="p-10 border rounded-tr-[100px] rounded-bl-[100px] text-center flex flex-col justify-center items-center gap-2 hover:bg-secondary hover:text-white duration-500 group lg:w-1/4 h-96">
          <MdApartment className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold">Apartment</h4>
          <p>
            Elevate your urban living experience! Dive into our selection of
            apartments for rent or buy, featuring modern amenities and prime
            locations to match your lifestyle.
          </p>
          <Button text="Check it" style="bg-transparent btn-sm" />
        </div>

        <div className="p-10 border rounded-tr-[100px] rounded-bl-[100px] text-center flex flex-col justify-center items-center gap-2 hover:bg-secondary hover:text-white duration-500 group lg:w-1/4 h-96">
          <FaWarehouse className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold">Warehouse</h4>
          <p>
            Unlock space for your business! Explore our warehouse rentals,
            offering ample storage and versatile layouts to accommodate your
            growing needs.
          </p>
          <Button text="Check it" style="bg-transparent btn-sm" />
        </div>

        <div className="p-10 border rounded-tr-[100px] rounded-bl-[100px] text-center flex flex-col justify-center items-center gap-2 hover:bg-secondary hover:text-white duration-500 group lg:w-1/4 h-96">
          <HiBuildingOffice2 className="text-5xl text-primary group-hover:scale-125 duration-500" />
          <h4 className="text-xl font-bold">Home Office</h4>
          <p>
            Elevate your business with premium office rentals. Tailored
            environments, strategic locations, and premium amenities await.
          </p>
          <Button text="Check it" style="bg-transparent btn-sm" />
        </div>
      </div>
    </div>
  );
};

export default Category;
