import xc from '@/public/images/logow.png'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact' className="xl:w-[80%] w-[90%] lg:grid lg:grid-cols-2 flex flex-col items-center gap-16 py-16"> 
        <div className="col-span-1 w-full flex flex-col items-start justify-start gap-4">
            <h1 className="font-semibold text-4xl">READY TO TURN YOUR DREAMS INTO REALITY?</h1>
            <p>Get in touch with us today and a representative will respond to your message with the speed of light</p>
            <div className="text-xs flex items-center justify-between gap-2">
                <Link href="mailto:linkupxc@gmail.com" target={"_blank"} className="border rounded-full py-1 px-3">Send us an email</Link>
                <Link href="https://instagram.com/90splayer" target={"_blank"} className="border rounded-full py-1 px-3">Follow on instagram</Link>
                <Link href='https://www.facebook.com/90splayerxc' target={"_blank"} className="border rounded-full py-1 px-3">Follow us on facebook</Link>
            </div>
        </div>
        <div className='col-span-1 items-center justify-center'>
            <Image src={xc} alt='' className='mx-auto animate-bounce lg:w-auto w-36 h-auto'/>
        </div>
    </div>
  )
}

export default Contact