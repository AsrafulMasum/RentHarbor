import { useState } from "react";
import useLoadSecureData from "../../Hooks/useLoadSecureData";
import PropertyCard from "../shared/PropertyCard";

const tabs = [
  {
    id: "Wishlist",
    label: "Wishlist",
  },
  {
    id: "Triplist",
    label: "Triplist",
  },
  {
    id: "Reservationlist",
    label: "Reservationlist",
  },
];

function Properties() {
  const [activeTab, setActiveTab] = useState("Wishlist");
  const { data: wishlistData } = useLoadSecureData("/properties/wishlist");
  const wishlist = wishlistData?.properties;

  const { data: reservationData } = useLoadSecureData(
    "/properties/reservations"
  );
  const reservations = reservationData?.reservations;

  return (
    <div className="p-10 max-h-screen overflow-auto">
      {/* Tabs */}
      <div className="flex gap-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-lg font-medium transition-colors duration-500 border-b-2 mb-5 ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "Wishlist" && (
          <div className="grid grid-cols-3 gap-10">
            {wishlist?.length > 0 ? (
              wishlist?.map((property) => (
                <PropertyCard key={property?._id} property={property} />
              ))
            ) : (
              <p>No properties in wishlist.</p>
            )}
          </div>
        )}

        {activeTab === "Reservationlist" && (
          <div className="grid grid-cols-3 gap-10">
            {reservations?.length > 0 ? (
              reservations?.map((property) => (
                <PropertyCard
                  key={property?._id}
                  property={property?.property}
                />
              ))
            ) : (
              <p>No reservations found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Properties;
