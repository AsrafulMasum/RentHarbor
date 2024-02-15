import PropTypes from "prop-types";

const City = ({ city, img, price, style }) => {
  return (
    <div className={`relative group overflow-hidden ${style}`}>
      <img
        className="group-hover:scale-105 duration-500 mix-blend-multiply w-full h-full object-cover overflow-hidden"
        src={img}
        alt="City"
      />
      <div className="absolute opacity-50 group-hover:opacity-100 left-0 bottom-0 duration-500 w-full h-full bg-gray-500 mix-blend-multiply"></div>
      <div className="absolute -left-40 group-hover:left-4 bottom-4 w-1 h-[50px] bg-primary duration-500"></div>
      <div className="absolute bottom-4 left-4 group-hover:left-8 duration-500 text-white">
        <h4 className="text-xl font-semibold">{city}</h4>
        <p>
          <span className="text-xl">$ {price}</span> (Starting From)
        </p>
      </div>
    </div>
  );
};

City.propTypes = {
  city: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  style: PropTypes.string,
};

export default City;
