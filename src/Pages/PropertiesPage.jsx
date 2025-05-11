import { Link } from "react-router-dom";
import useLoadPublicData from "../Hooks/useLoadPublicData";

function PropertiesPage() {
  const {
    data: properties,
    refetch,
    isLoading,
  } = useLoadPublicData("/properties/allProperties");
  console.log(properties);
  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto mt-40 mb-20">
      <div className="grid grid-cols-3 gap-10">
        {properties?.properties?.map((property) => (
          <Link
            key={property?._id}
            to={`/properties/${property?._id}`}
            className="duration-700 group overflow-hidden min-h-96 shadow-md"
          >
            <img
              className="group-hover:scale-105 duration-700 h-72 object-cover"
              src={property?.images?.[0]}
              alt="Image"
            />
            <div className="py-6 px-6 flex flex-col gap-2 bg-white">
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
    </div>
  );
}

export default PropertiesPage;
