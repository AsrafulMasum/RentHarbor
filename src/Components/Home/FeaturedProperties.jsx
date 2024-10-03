import { Link } from "react-router-dom";
import Title from "../Title";
import img from "./../../assets/houses/house.jpg";

const FeaturedProperties = () => {
  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto my-20">
      <Title
        title="Featured Properties"
        subTitle="Your Next Home Awaits – Explore Our Featured Picks"
        desc="Discover top properties, handpicked for their quality, location, and value. Find your perfect home here."
      />
      <div className="flex justify-center items-center gap-10 mt-16">
      <Link className="relative shadow-sm hover:shadow-lg duration-700 group overflow-hidden border">
          <img className="group-hover:scale-105 duration-700" src={img} alt="" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <h4 className="text-2xl font-semibold text-primary">Name</h4>
            <p className="text-lg text-black flex justify-between">Address</p>
            <p className="text-lg text-black">aminities</p>
          </div>
          <span className="text-primary bg-black px-2 py-1 rounded-full font-semibold absolute bottom-40 right-3">$ 117</span>
        </Link>
        <Link className="relative shadow-sm hover:shadow-lg duration-700 group overflow-hidden border">
          <img className="group-hover:scale-105 duration-700" src={img} alt="" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <h4 className="text-2xl font-semibold text-primary">Name</h4>
            <p className="text-lg text-black flex justify-between">Address</p>
            <p className="text-lg text-black">aminities</p>
          </div>
          <span className="text-primary bg-black px-2 py-1 rounded-full font-semibold absolute bottom-40 right-3">$ 117</span>
        </Link>
        <Link className="relative shadow-sm hover:shadow-lg duration-700 group overflow-hidden border">
          <img className="group-hover:scale-105 duration-700" src={img} alt="" />
          <div className="py-6 px-6 flex flex-col gap-2">
            <h4 className="text-2xl font-semibold text-primary">Name</h4>
            <p className="text-lg text-black flex justify-between">Address</p>
            <p className="text-lg text-black">aminities</p>
          </div>
          <span className="text-primary bg-black px-2 py-1 rounded-full font-semibold absolute bottom-40 right-3">$ 117</span>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProperties;
