import { Link, useLocation } from "react-router-dom";
import useLoadPublicData from "../Hooks/useLoadPublicData";
import Title from "../Components/Title";

function PropertiesPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get("search") || "";
  const { data: properties } = useLoadPublicData(
    `/properties/allProperties?search=${encodeURIComponent(search)}`
  );

  return (
    <div className="max-w-screen-xl mx-4 lg:mx-auto mt-40 mb-20">
      <Title
        title="All Properties"
        subTitle="Explore Our Properties for Rent as your needs"
        desc="Discover all available properties for rent in one place. Browse through a wide range of homes with detailed information, images, and pricing to find the perfect match for your needs."
      />

      {properties?.properties?.length === 0 ? (
        <div className="text-center mt-40">
          <h2 className="text-2xl font-semibold text-primary">
            No Properties Found
          </h2>
          <p className="text-secondary">
            Sorry, we couldn&#39;t find any properties matching your search.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-10 mt-10">
          {properties?.properties?.map((property) => (
            <Link
              key={property?._id}
              to={`/properties/${property?._id}`}
              className="duration-700 group overflow-hidden min-h-96 shadow-md rounded-lg"
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

                <p className="text-secondary">
                  {property?.features?.join(", ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default PropertiesPage;
