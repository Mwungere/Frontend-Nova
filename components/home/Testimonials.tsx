import React from "react";
import { TestimonialsList } from "@/constants";
import Image from "next/image";
import { useDarkMode } from "@/app/Context/store";
const Testimonials = () => {
  const {darkMode} = useDarkMode();
  return (
    <div className=" w-full mt-32">
      <div className=" flex flex-col items-center">
        <h1 className={` text-5xl lg:text-6xl font-body ${ darkMode ? 'text-[#C8C3bC]':'text-[#232A42]'} font-bold`}>
          See What They Are Saying{" "}
        </h1>
        <span className={` ${ darkMode ? 'text-[#9CE791]':'text-secondary'} font-bold font-body text-5xl lg:text-6xl mt-2`}>
          About Nova
        </span>
        <p className={` font-body ${darkMode ? 'text-[#CBC6BF]':'text-[#525252]'} mt-5 lg:text-lg mb-16`}>
          Discover testimonials and feedback about the Nova Project from those <br />
          who have experienced our innovative solutions firsthand.
        </p>
      </div>
      <div className=" flex flex-col md:flex-row flex-wrap gap-10 items-center lg:px-48">
        {TestimonialsList.map(({ image, h, p, sp }) => (
          <div
            key={h}
            className=" flex flex-col lg:flex-row w-[75%] lg:w-[45%] mx-auto gap-5 p-7 shadow-xl group hover:bg-secondary transition-all duration-300 ease-in-out rounded-xl"
          >
            <Image src={image} width={140} height={90} alt="image" />
            <div>
              <p className={`${darkMode ? 'text-[#CBC6BF]':'text-[#525252]'} font-body text-[#525252] group-hover:text-white`}>
                "{p}"
              </p>
              <div className=" flex flex-wrap mt-5 gap-5">
                <div className="">
                  <h1 className={` ${darkMode ? 'text-[#CBC6BF]':'text-[#232A42]'} text-3xl group-hover:text-white font-body`}>
                    {h}
                  </h1>
                  <p className={` font-body group-hover:text-white ${darkMode ? 'text-[#CBC6BF]':'text-[#525252]'} `}>
                    {sp}
                  </p>
                </div>
                <Image src="/stars.svg" width={112} height={16} alt="image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
