'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import xc from '@/public/images/logow.png'

const About = () => {
  return (
    <div id="about" className="xl:w-[70%] w-[80%] lg:grid lg:grid-cols-2 flex flex-col justify-center items-center gap-16 my-16">
     <div className="col-span-1 overflow-hidden py-16 relative">
      <div className="rotate-[345deg] flex flex-col items-center justify-center gap-4 px-4 tracking-tight font-extrabold text-[2rem]">
        <motion.div
          initial={{ x: 0}}
          animate={{ x: 450}}
          transition={{ repeatType: "reverse", duration: 2, repeat: Infinity, ease: 'easeInOut'  }}
          className="text-center"
        >IT'<div style={{ fontFamily: "BomberSquad", fontWeight: "normal",
            fontStyle: 'normal'}} className='inline-block'>S</div> ALL ABOUT
        </motion.div>
        <motion.div
          initial={{ x: 0}}
          animate={{ x: -450 }}
          transition={{ repeatType: "reverse", duration: 2, repeat: Infinity, ease: 'easeInOut'  }}
          className="text-center"
        >
        PUTTING THE HOTTEST
        </motion.div>
        <motion.div
          initial={{ x: 0}}
          animate={{ x: 450 }}
          transition={{ repeatType: "reverse", duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-center"
        >
        SONGS ON THE MAP
        </motion.div>
      </div>
      <motion.div className="absolute bottom-[50%] right-[40%]" 
        initial={{ opacity: 0, scale:1 }}
        animate={{ opacity: 1, scale:1.5 }}
        transition={{ repeatType: "reverse", duration: 2, repeat: Infinity }} >
            <Image  src={xc} alt="" width={60} height={60}/>
          </motion.div>
      </div>
      <div className="col-span-1 text-xs lg:text-left text-center gap-4 flex flex-col">
       <h1>At 90sPlayer, we believe in the transformative power of music. Our team of passionate musicians, producers, and sound engineers collaborate seamlessly to bring our musical vision to life. Drawing inspiration from the iconic sounds and daily experiences, we infuse modern creativity to produce tracks that resonate globally.</h1>
       <h1>We open our doors to a world of possibilities. Embracing diversity and cultural influences, 90sPlayer is not just a local agency; we are a global hub for musical collaboration. Whether you're an artist, producer, or creative mind from Lagos, London, Tokyo, or anywhere in between, join us in shaping the future of sound.</h1>
      </div>
    </div>
  );
}

export default About