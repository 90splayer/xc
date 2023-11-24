import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-[80%] text-xs">
    <div className="w-full md:border-t md:px-16 py-8 flex md:flex-row flex-col md:items-center items-start justify-between gap-8">
        <h1 className="w-full flex">90S PLAYER &copy;</h1>
        <div className="w-full flex items-center justify-center gap-16">
            <Link href='https://michaelojogbo.vercel.app'>MICHAEL OJOGBO</Link>
            <div className="flex items-center justify-center gap-8">
                <IoLogoInstagram href="https://instagram.com/90splayer" target={"_blank"}/>
                <FaXTwitter href="https://twitter.com/90splayer" target={"_blank"}/>
                <IoMailOutline href="mailto:linkupxc@gmail.com" target={"_blank"}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer