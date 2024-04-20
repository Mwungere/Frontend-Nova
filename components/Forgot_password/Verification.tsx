"use client"
import VerificationBackground from "../../public/verificationBackground.png";
import Image from "next/image";
import Link from "next/link";
import VerificationInput from "react-verification-input";
import EnterCode from "./Entercode";
import { useState } from "react";
const VerificationMain = () => {

    const [isLoading, setIsLoading] = useState<boolean >(false);
    const handleCodeSubmit = async (code:string) => {
        if (isLoading) return;
    
        try {
          const payload = new FormData();
          payload.append("code", code);
          const result = await fetch("/path/to/api/endpoint", {
            method: "POST",
            body: payload,
          });
          if (!result.ok) {
            const mess = await result.text();
            throw new Error(mess);
          }
          alert("Code is verified!");
        } catch (err:any) {
          alert(`Error: ${err.message}`);
        } finally {
          setIsLoading(false);
        }
    }


    const handleVerify = ()=>{

    }

    
  return (
    <div className="flex lg:flex-row">
      <div
        className="hidden  w-[50%] bg-cover h-screen  bg-no-repeat  lg:flex flex-col items-center overflow-y-hidden justify-center"
        style={{
          backgroundImage: `url(${VerificationBackground.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="bg-white  w-[50%] pt-[5%] rounded-lg bg-opacity-50  mx-auto my-auto h-[40%]">
          <h1 className="font-bold text-[2em] text-center text-[#1F6115]">
            Want To <br /> Monitor And <br /> Ensure Your <br /> Farm Security
          </h1>
          <p className="text-center font-lexend">
            Reviving Agriculture With Innovation
          </p>
          <p className="text-center font-lexend mt-3">
            Monitoring Farm Activities Simplified
          </p>
        </div>
      </div>
      <div>
      </div>

      <div className="w-[50%] pt-[3%] pl-[5%]">
      <div className="flex flex-row justify-between w-full ">
          <div className="flex font-bold cursor-pointer items-center font-body pb-6">
            <Image
              src="/logo.svg"
              width={70}
              height={70}
              className=" object-contain"
              alt="logo"
            />
            <h1 className=" text-black font-body mt-2 ml-2 text-2xl font-semibold">
              Nova
            </h1>
          </div>

          <div className="pt-[1em]">
            <Link
              href="/"
              className="text-black font-body mr-[1em] text-2xl font-semibold"
            >
              Back
            </Link>
          </div>
        </div>

        <div className="text-center mt-[6%]">
            <h1 className="font-bold text-[1.2em]">Enter 6 Digit Code Sent <br /> To You </h1>
            <p className="mt-[3%] text-gray-400">Please enter the code sent to your email</p>
        </div>
        <div className="text-center mt-[5%] flex justify-center ">
                <VerificationInput placeholder=""  />
        </div>
        {/* You may even use this component as verification code component  */}
        {/* <div className="flex flex-col gap-6 justify-center text-center">
        <EnterCode isLoading={isLoading} callback={handleCodeSubmit}  reset={false}/>
      </div> */}
         <div className="flex justify-center items-center">
            <button className="bg-[#1F6115] py-[2%] mx-auto mt-[4%] w-[30%] text-white rounded-xl" onClick={handleVerify}>Verify</button>
        </div>
        <div className="pt-[1em] mb-[2em] mt-[5%] text-center ">
          <p className="text-gray-300 font-lexend">
            Don't have an account ?{" "}
            <Link
              href="/signup"
              className="text-[#1F6115] font-lexend   cursor-pointer"
            >
              Sign up{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationMain;
