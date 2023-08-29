import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { useState } from "react";
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "FSc(Pre-engineering) - GPGC Okara",
        stage: "2018 - 2020",
      },
      {
        title: "BS(Computer Science) - University Of Okara",
        stage: "2020 - 2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend Web Developer - upwork",
        stage: "Starting 2021",
      },
      {
        title: "ReactJs Developer - fiverr",
        stage: "2021 - Ongoing",
      },
      {
        title: "Graphic Designer - remote",
        stage: "2020 - 2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "JavaScript - OpenWeaver ",
        stage: "2022",
      },
      {
        title: "frontend Web developer - CodeCapmOrg ",
        stage: "2021",
      },
      {
        title: "BOOTSTRAP - MLSA(Microsoft Learn Student Ambassador)",
        stage: "2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-20 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:text-[54px] md:text-[34px] md:leading-[1.5] text-2xl font-bold mb-2 xl:mb-4 -mt-3 md:-mt-8 "
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificient designs
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-white/60 z-20 max-w-[700px] mx-auto xl:mx-0 mb-4 px-2 md:px-0 "
          >
            2 Years ago ,I began freelancing as a Developer. Since then, I've
            done remote work for agencies, consulted for startup, and
            collaborated on digital products for business and condumer use.
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8  "
          >
            <div className="hidden md:flex flex-1 xl:gap-x-6 mb-3">
              {/* experience */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl text-accent font-extrabold mb-2 text-left ">
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px]  leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* Clients */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl text-accent font-extrabold mb-2 text-left">
                  <CountUp start={0} end={150} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              {/* Projects */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl text-accent font-extrabold mb-2 text-left">
                  <CountUp start={0} end={250} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/* awards */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl text-accent font-extrabold mb-2 text-left">
                  <CountUp start={0} end={8} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-2 md:mb-4 cursor-pointer">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent cursor-pointer after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-1 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
