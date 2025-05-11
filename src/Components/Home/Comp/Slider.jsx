import { Link } from "react-router-dom";
import Button from "../../Button";
import { motion } from "framer-motion";

const Slider = () => {
  const variants = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        className="text-neutral-content w-full max-w-screen-xl mx-4 lg:mx-auto"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.h1
          variants={variants}
          className="mb-16 text-2xl font-bold uppercase"
        >
          WELCOME TO{" "}
          <span className="ml-2 text-4xl text-primary tracking-widest">
            Rent Harbor
          </span>
        </motion.h1>
        <motion.p variants={variants} className="mb-16 text-7xl max-w-3xl">
          Bringing Your Dream Home Vision to Life.
        </motion.p>
        <motion.div
          variants={variants}
          className="flex flex-col md:flex-row gap-8"
        >
          <Link to="/allProperties">
            <Button
              text="Properties"
              style="btn-wide bg-primary border-none text-white"
            />
          </Link>
          <Link to="/contactUs">
            <Button
              text="Contact Us"
              style="btn-wide bg-transparent text-white"
            />
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Slider;
