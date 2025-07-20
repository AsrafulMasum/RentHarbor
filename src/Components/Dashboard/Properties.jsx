import { useState } from "react";
import useLoadSecureData from "../../Hooks/useLoadSecureData";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const tabs = [
  {
    id: "Wishlist",
    label: "Wishlist",
    content: "This is the Wishlist content.",
  },
  {
    id: "Triplist",
    label: "Triplist",
    content: "This is the Triplist content.",
  },
  {
    id: "Reservationlist",
    label: "Reservationlist",
    content: "This is the Reservationlist content.",
  },
];

function Properties() {
  const [activeTab, setActiveTab] = useState("Wishlist");
  const { data } = useLoadSecureData("/properties/wishlist");

  return (
    <div className="p-10">
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
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id}>
                <p className="text-gray-700">{tab.content}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Properties;
