import Image from 'next/image'
import React from 'react'
import jan from '@/public/images/outside.png'
import Link from 'next/link'
import { motion } from "framer-motion";

const Latest = () => {
  return (
    <div className=' flex flex-col items-center text-white'>
        <div className='py-16 xl:w-[70%] w-[80%] text-6xl font-bold text-center'>
          <h1 className='inline-flex'>MU<div 
            style={{ fontFamily: "BomberSquad", fontWeight: "normal",
            fontStyle: 'normal'}} className='animate-bounce inline-block'>S</div>IC</h1>
          <h1 className='inline-flex ml-4'>FUE<div 
            style={{ fontFamily: "BomberSquad", fontWeight: "normal",
            fontStyle: 'normal'}} className='animate-bounce inline-block'>L</div>ED</h1>
          <h1 className='inline-flex ml-4'>BY</h1>
          <h1 className='inline-flex ml-4'>PAS<div 
            style={{ fontFamily: "BomberSquad", fontWeight: "normal",
            fontStyle: 'normal'}} className='animate-bounce inline-flex'>S</div>ION</h1>
          <h1 className='inline-flex ml-4'>AND</h1>
          <h1 className='inline-flex ml-4'>DI<div 
            style={{ fontFamily: "BomberSquad", fontWeight: "normal",
            fontStyle: 'normal'}} className='animate-bounce inline-block'>R</div>ECTION</h1>
            <h1 className=' text-center'>     </h1>
        </div>
        <div className='flex flex-col gap-4 items-center justify-center relative mb-16'>
          <h1>LATEST RELEASE</h1>
          <Image src={jan} alt='' width={250} height={250} className=''/>
          <Link href='https://symphony.to/kamp/outside' className='absolute z-30 bottom-[-10px] right-[-30px] rotate-12' ><p className='border rounded-[50%] px-6 py-1 text-xs  transition-all duration-300 hover:bg-red-500'>LISTEN</p></Link>
        </div>
    </div>
  )
}

export default Latest