'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from './Navbar'
import home from '@/public/images/home.png'
import home2 from '@/public/images/noface.png'
import xc from '@/public/images/logowhite.png'
import xcw from '@/public/images/logow.png'
import Image from 'next/image';

const Intro = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <div
      style={{ backgroundImage: `url(${home2.src})` }}
      className="h-[100vh] bg-cover bg-center flex flex-col items-start justify-between"
    >
      <Navbar />
      {/* <Image
        className="animate-bounce"
        src={xcw}
        alt="xc"
        width={150}
        height={150}
      /> */}
      <div className="sliderContainer pb-8">
        <div ref={slider} className="slider">
          <p ref={firstText} className="border-y font-semibold text-7xl py-8">Kamp + Kamp + Kamp + Kamp + Kamp +</p>
          <p ref={secondText} className="border-y font-semibold text-7xl py-8">Kamp + Kamp + Kamp + Kamp + Kamp +</p>
        </div>
      </div>
    </div>
  );
}

export default Intro