import Image from "next/image";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  const icons = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/" },
    { icon: <FaTwitter />, url: "https://www.twitter.com/" },
    { icon: <FaLinkedin />, url: "https://www.linkedIn.com/" },
  ];

  return (
    <main className="w-full bg-secondary overflow-hidden">
      <Navbar containerStyles="bg-[#EBEFFF] z-20" />
      <div className="w-full flex flex-col lg:flex-row lg:justify-around pl-4 lg:pl-20 pt-4 lg:pt-20 pb-4 lg:pb-16 rounded-b-[40px] bg-[#EBEFFF]">
        <div className="mx-auto lg:w-1/2 lg:pr-8">
          <h1 className="text-4xl font-body mb-5 lg:text-6xl">Lets Get in <span className="text-4xl lg:text-6xl font-body font-bold">Touch!</span></h1>
          <p className="text-color lg:text-lg font-body">Have a question or need assistance? Reach <br /> out to us via email,<br />
            phone, or the contact form below. We're <br /> eager to assist you.
          </p>
          <p className="font-body mt-3 text-lg">Nice hearing from you!</p>
          <div className="hidden lg:block pl-32">
            <Image
              src='/rext1.svg'
              width={431}
              height={98}
              alt="image"
              className="absolute mt-32 ml-40 lg:ml-48"
            />
            <Image
              src='/rext1.svg'
              width={411}
              height={98}
              alt="image"
              className="mt-20 lg:mt-0"
            />
            <div className="border-secondary border bg-[#1D6923] rounded-full w-[500px] h-[500px] absolute -mt-16 -ml-32">
              <Image
                src='/girl.svg'
                width={514}
                height={609}
                alt="image"
                priority
                className="-mt-36 "
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6 lg:mb-16 lg:w-1/2 md:p-10 lg:pl-8">
          <form action="" className="flex flex-col mt-7">
            <label htmlFor="fullname" className="font-body lg:text-xl">Full Name:</label>
            <input type="text" name="fullname" className="border border-black rounded-3xl my-5 py-2 px-16 md:pr-80 lg:px-28 bg-[#EBEFFF]" />
            <label htmlFor="Email" className="font-body lg:text-xl">Email:</label>
            <input type="email" name="email" className="border border-black rounded-3xl my-5 py-2 bg-[#EBEFFF] px-16 md:pr-48 lg:px-28" />
            <label htmlFor="message" className="font-body lg:text-xl">Message:</label>
            <textarea name="message" id="" className="p-3 border border-black rounded-3xl my-5 bg-[#EBEFFF]"></textarea>
            <button className="bg-secondary w-max py-3 px-10 self-end rounded-2xl font-body text-white font-bold">Submit</button>
          </form>
        </div>
      </div>
      <div className="flex md:flex-row items-center flex-col-reverse justify-around pt-10 pb-10 bg-secondary">
        <div className="flex flex-row lg:mt-28 gap-5 text-3xl mt-8 lg:justify-start">
          {icons.map(({ icon, url }, index) => (
            <Link href={url} key={index} className="text-white py-2 lg:py-10">
              {icon}
            </Link>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-48 text-white mt-8 lg:pt-20 lg:mt-0">
          <div className="lg:w-1/2">
            <h1 className="font-bold text-xl font-body mb-4 lg:mb-5">Head Office:</h1>
            <p className="flex gap-3 font-body mb-1 lg:mb-3"><FaPhone /> +447473997191</p>
            <p className="flex gap-3 font-body mb-1 lg:mb-3"><FaEnvelope /> vanessauwase121@gmail.com</p>
            <p className="flex gap-3 font-body mb-1 lg:mb-3"><FaLocationArrow /> KK509 Street-Kigali</p>
          </div>
          <div className="lg:w-1/2">
            <h1 className="font-bold text-xl font-body mb-4 lg:mb-5">Branch Office:</h1>
            <p className="flex gap-3 font-body mb-1 lg:mb-3"><FaPhone /> +447473997191</p>
            <p className="flex gap-3 font-body mb-1 lg:mb-3"><FaEnvelope /> nova@gmail.com</p>
            <p className="flex gap-3 font-body mb-1 lg:mb-3"><FaLocationArrow /> KK509 Street-Kigali</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactPage;
