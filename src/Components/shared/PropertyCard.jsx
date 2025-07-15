import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PropertyCard = ({ property }) => {
  const { user, getUser } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleLike = async (id) => {
    if (!user) {
      toast.error("Please login to add to wishlist");
      navigate("/login");
      return;
    }

    try {
      const res = await axiosSecure.post(`/auth/wishList/${user?._id}`, {
        propertyId: id,
      });

      if (res?.data?.success) {
        await getUser();
        toast.success(res?.data?.message);
      }
    } catch (error) {
      toast.error("Failed to update wishlist");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-t-lg">
      <Link
        to={`/properties/${property?._id}`}
        className="duration-700 group overflow-hidden h-96"
      >
        <img
          className="group-hover:scale-105 duration-700 h-72 object-cover"
          src={property?.images?.[0]}
          alt="Image"
        />
        <div className="py-6 px-6 flex flex-col gap-2 bg-white border">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold text-primary">
              {property?.title}
            </h4>
            <p className="text-primary font-semibold text-nowrap">
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
      <div>
        {user?.wishList?.includes(property._id) ? (
          <FcLike
            className="absolute top-4 right-4 text-2xl cursor-pointer"
            onClick={() => handleLike(property._id)}
          />
        ) : (
          <FcLikePlaceholder
            className="absolute top-4 right-4 text-2xl cursor-pointer"
            onClick={() => handleLike(property._id)}
          />
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
