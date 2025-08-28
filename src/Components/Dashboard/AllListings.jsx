import useLoadPublicData from "../../Hooks/useLoadPublicData";
import PropertyCard from "../shared/PropertyCard";
import Title from "../Title";

function AllListings() {
  const { data: properties } = useLoadPublicData(`/properties/allProperties`);

  console.log(properties);

  return (
    <div className="py-10 px-10 max-h-screen overflow-y-auto">
      <Title
        title="All Properties"
        subTitle="All the Properties that are available for Rent"
        desc="Admin can view and manage all properties that are available for rent in one place. This section provides full control for block or unblock any property."
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

export default AllListings;
