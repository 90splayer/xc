'use client'
// Import necessary types
import { FC, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaPlayCircle } from "react-icons/fa";

// Define the type for the project prop
interface ProjectProps {
  title1: string;
  title2: string;
  src: string;
  link: string;
}

// Define animation variants
const anim: Variants = {
  initial: { width: 0 },
  open: { width: "auto", transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
  closed: { width: 0 }
};

// Define the component using FC (Functional Component) type
const Project: FC<{ project: ProjectProps }> = ({ project }) => {
  // Use State type
  const [isActive, setIsActive] = useState<boolean>(false);

  // Destructure project object
  const { title1, title2, src, link } = project;

  return (
    <a
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className='project border-y py-8' href={link} target={"_blank"}
    >
      <p>{title1}</p>
      <motion.div variants={anim} animate={isActive ? "open" : "closed"} className='imgContainer relative'>
        <img src={`${src}`} alt={title1} />
        <FaPlayCircle className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-6 h-6'/>
      </motion.div>
      <p>{title2}</p>
    </a>
  );
};

export default Project;