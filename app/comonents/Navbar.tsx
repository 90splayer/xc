import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoInstagram, IoMdClose } from "react-icons/io";
import xcw from '@/public/images/logow.png'
import Image from "next/image";
import xc from '@/public/images/logow.png'
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex justify-center w-full">
    <ul className="lg:flex w-[80%] hidden lg:gap-4 gap-2 justify-center pt-8 lg:text-xs text-white">
        <li className="w-[18%] flex items-center justify-between border-b pb-2">
        <Link href="/">HOME</Link>
            <GoDotFill/>
        </li>
        <li className="w-[18%] flex items-center justify-between border-b pb-2">
            <Link href='#about' className="">ABOUT</Link>
            <GoDotFill/>
        </li>
        <li className="w-[18%] flex items-center justify-between border-b pb-2">
            <Link href='#projects'>PROJECTS</Link>
            <GoDotFill/>
        </li>
        <li className="w-[18%] flex items-center justify-between border-b pb-2">
            <Link href='#contact'>CONTACT</Link>
            <GoDotFill/>
        </li>
    </ul>
    <div className="w-full lg:hidden flex items-center justify-center pt-8">
    <RxHamburgerMenu onClick={() => {setIsOpen(true)}} className='flex w-8 h-8 text-white'/> 
    </div>
        { isOpen?
               <div className="lg:hidden absolute top-0 right-0 h-[100vh] w-full z-50 text-white flex flex-col gap-7 items-start justify-start pl-8 pt-4 pr-4 bg-black">        
               <div className="w-full flex items-end justify-end relative">   
               <Image onClick={() => {setIsOpen(false)}} className="m-8 animate-bounce" src={xcw} alt="xc" width={32} height={32}/> 
               {/* <IoMdClose onClick={() => {setIsOpen(false)}} className='rounded-md w-8 h-8 m-8 text-white'/> */}
               </div>
               <ul className="text-7xl font-bold flex flex-col items-start">
                <Link href='/' className=" py-4">HOME</Link>
                 <Link href='#about' className="py-4">ABOUT</Link>
                 <Link href='#projects' className="py-4">PROJECTS</Link>
                 <Link href='#contact' className="py-4">CONTACT</Link>
               </ul>
               <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex items-center justify-center gap-8">
                <IoLogoInstagram href="https://instagram.com/90splayer" target={"_blank"}/>
                <FaXTwitter href="https://twitter.com/90splayer" target={"_blank"}/>
                <IoMailOutline href="mailto:linkupxc@gmail.com" target={"_blank"}/>
            </div>
             </div>
             : null
            }
    </div>
  )
}

export default Navbar