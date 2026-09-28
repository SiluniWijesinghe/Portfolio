import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totSteps = 6;
  return totSteps - index - 1;
};

const stairSteps = ["one", "two", "three", "four", "five", "six"];

const Stairs = () => {
  return (
    <>
      {stairSteps.map((step, index) => {
        return (
          <motion.div
            key={step}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.08,
            }}
            className="h-full flex-1 bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
