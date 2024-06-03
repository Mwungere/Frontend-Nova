"use client";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

import GoogleButton from "react-google-button";
import { useRouter } from "next/navigation";
import { handleRequest } from "../RequestFunctions";
import Link from "next/link";
import { signFinally } from "../signFinally";
interface FormData {
  names: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    names: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<string | null>();
  const [show, setShow] = useState<boolean>(false);
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState<boolean>(false);
  const handleClick = () => {
    setShow(!show);
  };

  const handleSignUpWithGoogle = async () => {
    signFinally(
      "http://localhost:3500/api/v1/users/registerUser",
      router
    );
  };

  const postDetails = (pics: any) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast.error("Please select an Image" ,{duration:5000, position:"top-right"})
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast.error("Please select an Image" ,{duration:5000, position:"top-right"})
      setPicLoading(false);
      return;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      const error = new Error("Password must be at least 6 characters");
      setErrors(error.message);

      toast.error(error.message ,{duration:5000, position:"top-right"})

    } else if (formData.password !== formData.confirmPassword) {
      const error = new Error("Passwords do not match");
      toast.error(error.message ,{duration:5000, position:"top-right"})
    } else {
      setErrors(null);
      const url = "http://localhost:3500/api/v1/users/registerUser";
      await handleRequest(formData, url, router);
    }
  };
  return (
    <div className="flex md:flex-row sm:flex-col h-screen  lg:overflow-y-hidden  ">
      <div className="pl-[3%] pt-5 pr-5 sm:w-full md:w-[50%]  ">
        <div className="flex flex-row justify-between ">
          <div className="flex font-bold cursor-pointer items-center font-body">
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

          <div>
            <Link
              href="/"
              className="text-black font-body mt-2 ml-2 text-2xl font-semibold"
            >
              Back
            </Link>
          </div>
        </div>

        <div>
          <h1 className=" text-black font-body mt-[2em]  mb-4 text-2xl font-semibold">
            Create An Account
          </h1>
          <h3 className="mb-10">Enter the fields below to get started </h3>
          <GoogleButton
            label="Sign up with Google"
            onClick={handleSignUpWithGoogle}
          />
        </div>

        <div className="flex flex-row mt-[1em] ">
          <hr className="w-[30%] mt-4 text-gray-400 mr-[1rem] " />
          <p>or</p>
          <hr className="w-[30%] ml-[1rem] mt-4  text-gray-400" />
        </div>

        <div className="sm:w-[90%] lg:w-[80%]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col  mt-2">
              <label htmlFor="names">Names * </label>
              <input
                className="w-[80%] outline-none sm:mt-1 lg:mt-[10px] focus:border-gray-400 h-[40px] border-[1px] indent-[12px] rounded-lg border-gray-400 "
                name="names"
                value={formData.names}
                onChange={(e) =>
                  setFormData((prevData) => {
                    return { ...prevData, names: e.target.value };
                  })
                }
              />
            </div>
            <div className="flex flex-col  mt-2 mb-2">
              <label className="font-semibold" htmlFor="names">
                Email *
              </label>
              <input
                className="w-[80%] outline-none sm:mt-1 lg:mt-[10px] focus:border-gray-400 h-[40px] border-[1px] indent-[12px] rounded-lg border-gray-400 "
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prevData) => {
                    return { ...prevData, email: e.target.value };
                  })
                }
              />
            </div>

            <label className="font-semibold" htmlFor="password">
              Password *
            </label>
            <div className="relative w-[80%] mb-2 rounded-lg sm:mt-1 lg:mt-[10px]">
              <input
                id="password"
                type={show ? "text" : "password"}
                className={`w-full  border  outline-none ${
                  errors ? "border-red-900" : "border-gray-400"
                } rounded-lg p-2 focus:border-gray-400`}
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    password: e.target.value,
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

            

            <div className="w-[80%] pt-3">
              <button
                type="submit"   
                className="bg-[#1F6115] py-3 rounded-lg  hover:bg-[#1F6115] w-[60%] flex flex-row  text-white justify-center "
              >
                {" "}
                Submit
              </button>
            </div>
          </form>

          <div className="flex flex-row">
            <h1 className="text-gray-400 mt-6">Already have an account ? </h1>
            <Link
              href="/signin"
              className="text-[#1F6115] ml-3 font-lexend mt-6  cursor-pointer"
            >
              Login{" "}
            </Link>{" "}
          </div>
          <Toaster />
        </div>
      </div>
      <div></div>

      <div
        className="hidden  w-[50%] bg-cover  bg-no-repeat  lg:flex flex-col items-center overflow-y-hidden justify-center"
        style={{
          backgroundImage: `url(/background.png)`,
          backgroundSize: "cover",
        }}
      >
        <div className="bg-white  w-[50%] pt-[5%] rounded-lg bg-opacity-50  mx-auto my-auto h-[30%]">
          <h1 className="font-bold text-[2em] text-center text-[#1F6115]">
            Start Your <br /> Journey With Us!
          </h1>
          <p className="text-center font-lexend">
            Reviving Agriculture With Innovation
          </p>
          <p className="text-center font-lexend mt-3">
            Monitoring Farm Activities Simplified
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
