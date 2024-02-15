import PropTypes from "prop-types";

const Title = ({ title, subTitle, desc }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary">{title}</h2>
        <p className="text-gray-500 text-xl">{subTitle}</p>
        <div className="w-20 h-2 bg-secondary rounded-full my-2"></div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  desc: PropTypes.string,
};

export default Title;
