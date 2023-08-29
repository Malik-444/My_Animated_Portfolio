// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
// motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-30 flex items-center">
      <Circles />
      <div className="container mx-auto mt-0 sm:mt-[155px]">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex-1 flex-col lg:text-left mb-2 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-2 xl:mt-8"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[600px] mx-auto lg:mx-0"
            >
             "I specialize in web development, delivering bespoke solutions that blend creativity and functionality to empower your digital presence and goals."
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full flex-1  xl:max-w-[65%]"
          >
            <WorkSlider  />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
