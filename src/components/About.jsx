import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../utils";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full sm:w-[250px] p-[1px] rounded-[20px] shadow-card'
    style={{ maxWidth: "250px" }} 
  >
    <div
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col'
      style={{ minHeight: "280px" }} 
    >
      <img
        src={icon}
        alt='web-development'
        className='w-16 h-16 object-contain mb-4'
      />

      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Highly skilled and detail-oriented Mechatronics Engineer with extensive experience in SolidWorks, ANSYS, AutoCAD, and MATLAB. 
        Seeking a challenging position where I can apply my expertise in mechanical design, simulation, and analysis to contribute 
        to innovative projects and drive engineering excellence.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");


