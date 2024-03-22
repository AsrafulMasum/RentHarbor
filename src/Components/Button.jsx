import PropTypes from "prop-types";
import { useState } from "react";
import "./button.css";
import { TbFidgetSpinner } from "react-icons/tb";

const Button = ({ text, style, loading }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    setPosition({ x, y });
  };

  const styles = {
    "--x": `${position.x}px`,
    "--y": `${position.y}px`,
  };
  return (
    <>
      <button
        onMouseMove={handleMouseMove}
        style={styles}
        type="submit"
        className={`btn py-2 px-4 cursor-pointer rounded-lg font-semibold border hover:text-primary duration-500 ${style}`}
      >
        <span>
          {loading ? (
            <TbFidgetSpinner className="animate-spin text-lg" />
          ) : (
            text
          )}
        </span>
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
  loading: PropTypes.bool,
};

export default Button;
