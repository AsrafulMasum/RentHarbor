import Button from "../Button";
import { motion } from "framer-motion";

const Slider = () => {
  const variants = {
    initial: {
      y: -200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: -1,
      },
    },
  };
  return (
    <>
      <div className="text-neutral-content w-full max-w-screen-xl mx-auto">
        <motion.div variants={variants} initial="initial" whileInView="animate">
          <motion.h1 variants={variants} className="mb-5 text-2xl font-bold text-primary">
            WELCOME TO OUR HOUSE RENT
          </motion.h1>
          <motion.p variants={variants} className="mb-10 text-5xl max-w-2xl">
            Bringing Your Dream Home Vision to Life.
          </motion.p>
          <motion.div variants={variants} className="flex flex-col md:flex-row gap-4">
            <Button
              text="Property"
              style="btn-wide bg-secondary border-none"
            ></Button>
            <Button text="Contact Us" style="btn-wide bg-transparent"></Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Slider;
