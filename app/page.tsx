"use client";

import BlurredDiv2 from "@/components/home/BlurredDiv2";
import CaringForYourFarmPlants from "@/components/home/CaringForYourFarmPlants";
import Footer from "@/components/home/Footer";
import Gallery from "@/components/home/Gallery";
import GetToKnowAboutUs from "@/components/home/GetToKnowAboutUs.tsx";
import Intro from "@/components/home/Intro";
import NewsLetter from "@/components/home/NewsLetter";
import OurLandscapingWork from "@/components/home/OurLandscapingWork";
import Questions from "@/components/home/Questions";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/Navbar";


const page = () => {
  return (
    <>
    <main className="">
      <div className="relative flex place-items-center before:absolute before:h-[600px] before:w-[900px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-primary before:to-transparent before:opacity-60 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-100 after:to-transparent after:opacity-25 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary  before:dark:opacity-25 after:dark:from-primary after:dark:to-transparent after:dark:opacity-40 before:lg:h-[1000px] before:lg:w-[1000px] z-[-1]"></div>
      <Navbar />
      <Intro />
      <BlurredDiv2 />
      <GetToKnowAboutUs />
      <CaringForYourFarmPlants />
      <OurLandscapingWork />
      <Testimonials />
      <Gallery />
      <Questions />
      <BlurredDiv2 />
      <NewsLetter />
      <Footer />
    </main>
    </>
  )
}

export default page