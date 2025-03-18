import PropTypes from "prop-types";

const Title = ({ title, subTitle, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold text-primary mb-4">{title}</h2>
      <p className="text-gray-500 text-xl mb-4 capitalize">{subTitle}</p>
      <div className="w-20 h-2 bg-secondary_ex rounded-full my-4"></div>
      <p className="mt-4">{desc}</p>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  desc: PropTypes.string,
};

export default Title;
