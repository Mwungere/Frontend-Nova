"use client";
import { Toaster, toast } from "react-hot-toast";
import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import GoogleButton from "react-google-button";
import Cookies from "js-cookie";
import { useState } from "react";
import { useEffect } from "react";
import { handleRequest } from "../RequestFunctions";
import { signFinally } from "../signFinally";
import { useRouter } from "next/navigation";
type formData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const SignIn = () => {
  useEffect(() => {
    const rememberedUser = Cookies.get("rememberedUser");
    if (rememberedUser) {
      setFormData({ ...formData, email: rememberedUser });
    }
  }, []);

  const router = useRouter();
  const [formData, setFormData] = useState<formData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const handleSignInWithGoogle = async () => {
    await signFinally("http://localhost:3500/users/loginUser", router);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rememberMe) {
      Cookies.set("rememberedUser", formData.email, { expires: 365 });
    } else {
      Cookies.remove("rememberedUser");
    }
    const url = "http://localhost:3500/users/loginUser";
    await handleRequest(formData, url, router);
  };
  return (
    <div className="flex flex-row items-center h-screen lg:overflow-y-hidden ">
      <div
        className="hidden  w-[50%] bg-cover bg-no-repeat  lg:flex flex-col items-center overflow-y-hidden justify-center"
        style={{
          backgroundImage: `url(/signinBackroundImage.png)`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <div className="my-[20%] pt-[3%] opacity-70 w-[60%] h-fit  rounded-lg flex flex-col  bg-white">
          <div className="pl-[10%] my-[6%] ">
            <h1 className=" text-[#1F6115] text-4xl 2xl:text-6xl h-[50px] mb-[2em] 2xl:mb-[3em] font-body font-bold ">
              Want To <br></br> Monitor And <br /> Ensure Your <br /> Farm
              Security
            </h1>
            <div className="pt-[20%] 2xl:pt-[10%]">
              <p className="h-[40px] mb-[20%] xl:mb-[10%] font-body text-lg text-black-400">
                Reviving agriculture with Innovation <br />
                Monitoring Farm Activities Simplified
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[70%] lg:w-[50%] pt-[3%] h-full pl-[5%] mx-auto">
        <div className=" flex justify-between">
          <div className=" flex gap-2 -mt-[1%] lg:-mt-[5%]">
            <Image
              src="/logo.svg"
              width={50}
              height={50}
              className="mb-[2em]  h-[80px] "
              alt="project logo"
            />

            <h1 className="font-body text-black text-2xl font-bold mt-6 ">
              Nova
            </h1>
          </div>
          <Link
            href="/signup"
            className=" font-body text-[#232A42] mt-[4%] lg:-mt-[1%] lg:mr-[10%]"
          >
            Back
          </Link>
        </div>
        <h1 className="font-lexend text-3xl font-bold mt-[10%] lg:mt-[8%] text-black">
          Hey, Hello
          <span className="text-[2em] ">👋</span>
        </h1>
        <p className="mt-[1em] font-body text-[17px]">
          Enter the information you entered while registering{" "}
        </p>
        <div className="pt-[2em] pb-[1em]"></div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email" className="mb-[1em] font-body">
            Email *
          </label>
          <input
            className="border-gray-400 outline-gray-400 border-[1px]  mb-[3%] w-[100%] lg:w-[90%] 2xl:w-[60%] rounded-md h-[50px] lg:h-[35px] indent-3"
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }))
            }
          />

          <label htmlFor="password" className="mb-[1em] font-body">
            Password *
          </label>
          <input
            className="border-gray-400  border-[1px]  mb-[3%] w-[100%] lg:w-[90%] 2xl:w-[60%] rounded-md h-[50px] lg:h-[35px] indent-3 outline-gray-400"
            type="password"
            value={formData.password}
            id="password"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }
          />

          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-3 md:gap-44 lg:gap-5 2xl:gap-44">
            <div className="mt-5">
              <input
                type="checkbox"
                className=" h-4 w-4 hover:cursor-pointer"
                onClick={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    rememberMe: !prevData.rememberMe,
                  }))
                }
              />
              <span className="pl-[0.75em]  font-body">Remember Me</span>
            </div>
            <div className=" cursor-pointer ">
              <span className="text-[#1F6115] font-body">Forgot password?</span>
            </div>
          </div>

          <input
            type="submit"
            className="text-white h-[60px] cursor-pointer font-lexend mt-[1em] w-[100%] lg:h-[50px] lg:w-[90%] 2xl:w-[60%] border-none rounded-lg bg-[#1F6115]"
            value={"Login"}
          />
        </form>

        <div className="pt-[1em] mb-[2em] mt-3">
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
        <div className="flex flex-row mt-[1em] ">
          <hr className="w-[30%] mt-4 text-gray-400 mr-[1rem] " />
          <p>or</p>
          <hr className="w-[30%] ml-[1rem] mb-6 mt-4  text-gray-400" />
        </div>
        <GoogleButton onClick={handleSignInWithGoogle} />
      </div>
      <Toaster />
    </div>
  );
};

export default SignIn;
