"use client"
import React, { useState } from "react";
import Background from "../../public/newPasswordBack.png";
import Image from "next/image";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import Link from "next/link";
import { useAppSelector } from "@/store/store";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

interface FormData {
  newPassword: string,
  confirmPassword: string
}

const NewPassword = () => {
  const [show, setShow] = useState<boolean>(false)
  const [errors, setErrors] = useState<string>()
  const [formData, setFormData] = useState<FormData>({newPassword:"", confirmPassword:""})
   const userEmail = useAppSelector((state)=>state.verification.email)
   const router = useRouter()
   const handleClick = ()=>{
    setShow(!show)
   }


  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault()
    if(formData?.newPassword !== formData?.confirmPassword) {
     toast.error(
      "Passwords do not match",
     {position:"top-right"}
     ) 
     setErrors("Passwords do not match")
     return;
    }

    if(formData?.newPassword.length < 6 || formData?.newPassword.length < 6){
      toast.error( "Please password must be at least 6 characters", {position:"top-right"}) 
       setErrors("Passwords must be at least 6 characters")
       return;
    }

     const updatedData = {
      email: userEmail,
      newPassword : formData.newPassword
     }

     const res = await axios.put("http://127.0.0.1:3500/api/v1/users/updatePassword", updatedData, {
      headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${Cookies.get("jwt")}`,
      }
     })
     try {
      if(res.status == 200){
        toast(
          "Password updated successfully",
          {position:"top-right"}
         )  
         router.replace("/signin");
      }
     } catch (error) {
      console.log(error);
      toast.error(
        "Faced an error when resetting password",
      {position:"top-right"}
      )  
     
     }
  }

  return (
    <div className="flex flex-row w-full">
      <div
        className="w-[50%] flex justify-center  h-screen"
        style={{
          backgroundImage: `url(${Background.src})`,
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
      <div className="w-[50%] pl-[2%] pt-[4%]">
        <div className="flex flex-col">
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

          <div className="">
            <h1 className="font-bold flex justify-center">Reset password</h1>
            <p className="flex justify-center mt-5">Please enter the new password and confirm the password</p>
          </div>
          <div className="w-[70%] flex justify-center mx-auto pt-[5%] flex-col">
          
          <label className="font-semibold " htmlFor="password">
              New password *
            </label>
            <div className="relative w-[80%] rounded-lg mb-2 sm:mt-1 lg:mt-[10px]">
              <input
                id="confirmpassword"
                type={show  ? "text" : "password"}
                className={`w-full  border  outline-none ${
                  errors ? "border-red-900" : "border-gray-400"
                } rounded-lg p-2 focus:border-gray-400`}
                name="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    confirmPassword: e.target.value,
                  }))
                }
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={handleClick}
              >
                {show ? <IoMdEyeOff /> : <IoEyeSharp />}
              </span>
            </div> 


              <label className="font-semibold " htmlFor="password">
              Confirm password *
            </label>
            <div className="relative w-[80%] rounded-lg mb-2 sm:mt-1 lg:mt-[10px]">
              <input
                id="confirmpassword"
                type={show  ? "text" : "password"}
                className={`w-full  border  outline-none ${
                  errors ? "border-red-900" : "border-gray-400"
                } rounded-lg p-2 focus:border-gray-400`}
                name="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    confirmPassword: e.target.value,
                  }))
                }
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={handleClick}
              >
                {show ? <IoMdEyeOff /> : <IoEyeSharp />}
              </span>
            </div>  
               
            <button className="bg-[#1F6115] mt-5 w-[70%] text-white py-3 rounded-lg flex justify-center hover:bg-[#1F6115]"onClick={handleSubmit}>Reset password</button>
          </div>

          <div className="pt-[1em] mb-[2em] mt-3 mx-auto w-[70%]">
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
    </div>
  );
};

export default NewPassword;
