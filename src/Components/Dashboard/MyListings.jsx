import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useLoadSecureData from "../../Hooks/useLoadSecureData";
import { Link } from "react-router-dom";

function MyListings() {
  const { user } = useContext(AuthContext);

  const { data } = useLoadSecureData(
    `/properties/hostProperties/${user?.email}`
  );

  return (
    <div className="px-10 py-10 grid grid-cols-3 gap-10 max-h-screen overflow-y-scroll">
      {data?.result?.map((property) => (
        <Link
          key={property?._id}
          to={`/properties/${property?._id}`}
          className="duration-700 group overflow-hidden min-h-[430px] w-full rounded-lg shadow-md"
        >
          <img
            className="group-hover:scale-105 duration-700 h-72 object-cover w-full"
            src={property?.images?.[0]}
            alt="Image"
          />
          <div className="py-6 px-6 flex flex-col gap-2 bg-white border">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-semibold text-primary">
                {property?.title}
              </h4>
              <p className="text-primary font-semibold">
                $ {property?.pricePerDay}
              </p>
            </div>
            <p className="text-secondary">
              <span className="font-semibold">Location: </span>
              {property?.location}, {property?.address?.city},{" "}
              {property?.address?.state}
            </p>

            <p className="text-secondary">{property?.features?.join(", ")}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MyListings;
