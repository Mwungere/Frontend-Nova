import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@/app/context/ThemeContext";
const CaringForYourFarmPlants = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return null; // Handle the case where context is undefined
  }
  const { theme } = context;
  return (
    <div className=" flex flex-col w-full items-center mt-20">
      <h1
        className={`font-body text-[#232A42] font-semibold text-5xl self-start ml-10 lg:ml-20 lg:text-6xl`}
      >
        Caring For Your{" "}
        <span className={`text-secondary font-body text-5xl`}>
          Farm <br /> Plants
        </span>
        , Our Expertise
      </h1>
      <p
        className={`text-[#2f2e2e] ${
          theme.palette.mode === "dark" ? "text-color" : "text-gray-800"
        } font-body lg:text-xl lg:mt-20`}
      >
        Nova stands out by seamlessly integrating farm security and automatic
        irrigation, providing a comprehensive <br /> agricultural solution that
        ensures both the sermiafety of farming assets and the optimization of
        irrigation <br /> practices. This innovative approach sets Nova apart in
        the competitive landscape.
      </p>
      <div className=" flex flex-col lg:flex-row lg:gap-60">
        <div className=" shadow-2xl p-4 lg:p-10 mb-10">
          <div>
            <Image
              src="/mission.svg"
              width={59}
              height={59}
              alt="image"
              className=" mb-5"
            />
            <h1
              className={`text-[#2f2e2e] mb-5 font-body text-4xl lg:text-5xl`}
            >
              Our <span className={` font-body text-secondary`}>Mission</span>
            </h1>
            <p
              className={`text-[#2f2e2e] ${
                theme.palette.mode === "dark" ? "text-color" : "text-gray-800"
              } font-body lg:text-xl lg:mt-20`}
            >
              Our mission is to revolutionize agriculture through advanced Farm{" "}
              <br /> Security, Monitoring, and Automation using embedded
              systems. <br /> We empower farmers with real-time surveillance,
              disease <br /> detection, and operational efficiency, fostering a
              secure and <br /> profitable future for agriculture.
            </p>
          </div>
          <div className="">
            <Image
              src="/vision.svg"
              width={59}
              height={59}
              alt="image"
              className=" mb-5 mt-16"
            />
            <h1
              className={`text-[#2f2e2e] mb-5 font-body text-4xl lg:text-5xl`}
            >
              Our <span className={` font-body text-secondary`}>Vision</span>
            </h1>
            <p
              className={`text-[#2f2e2e] ${
                theme.palette.mode === "dark" ? "text-color" : "text-gray-800"
              } font-body lg:text-xl lg:mt-20`}
            >
              Our vision is to lead the future of agriculture by pioneering
              cutting <br />
              -edge technologies in Farm Security, Monitoring, and Automation{" "}
              <br />
              through embedded systems. We aspire to create a global impact,
              <br /> where our innovative solutions redefine sustainable farming{" "}
              <br /> practices, ensuring food security, and driving prosperity
              for <br /> farmers worldwide
            </p>
          </div>
        </div>
        <Image
          src="/irrigation.svg"
          width={596}
          height={616}
          alt="image"
          className=""
        />
      </div>
    </div>
  );
};

export default CaringForYourFarmPlants;
