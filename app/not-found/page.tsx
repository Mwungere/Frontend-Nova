"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";
  const roboto = Roboto({
    weight: ["900"],
    subsets: ["latin"],
  });
const page = () => {
  const router= useRouter()
  return (
    <div
      className="w-[100%] h-screen text-white"
      style={{
        backgroundImage: `url(/notfound_background.png)`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex font-bold cursor-pointer items-center font-body p-[2%]">
        <Image
          src="/logo.svg"
          width={70}
          height={70}
          className=" object-contain"
          alt="logo"
        />
        <h1 className=" text-white font-body mt-2 ml-6 text-[2em] font-semibold">
          Nova
        </h1>
      </div>

      <div className="flex flex-col items-center flex-shrink-0 mt-[6%]   w-full justify-center ">
        <div className="text-center w-[100%] ">
          <p className="font-bold text-[20px] ml-[-10%]">ERROR</p>
          <p
            className={
              roboto.className &&
              "text-[200px]   mt-[-40px] font-bold tracking-[14.4px] uppercase drop-shadow-md"
            }
          >
            404
          </p>
          <p className="font-bold text-[20px] pl-[16%] mt-[-30px]">
            PAGE NOT FOUND
          </p>
          <p className="text-[25px] mt-[1em]">
            The page you are looking for might have been remove,had <br /> its
            name changed or its temporary unvailable
          </p>
          <p className="text-[30px] mt-[1%] tracking-[20px]">BACK</p>
          <div className="flex justify-center items-center">
            <Image src="/back.svg" width={70} height={70} alt="logo" onClick={()=>router.back()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
