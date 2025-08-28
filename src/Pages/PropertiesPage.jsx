import { Link, useLocation } from "react-router-dom";
import useLoadPublicData from "../Hooks/useLoadPublicData";
import Title from "../Components/Title";
import PropertyCard from "../Components/shared/PropertyCard";

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          {properties?.properties?.map((property) => (
            <PropertyCard key={property?._id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PropertiesPage;
