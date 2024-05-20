"use client";
import { Toaster, toast } from "react-hot-toast";
import { Button } from "@/components";
import Link from "next/link";
import Image from "@/node_modules/next/image";
import GoogleButton from "react-google-button";
import Cookies from "js-cookie";
import { useState } from "react";
import { useEffect } from "react";
import { handleRequest } from "../RequestFunctions";
import { signFinally } from "../signFinally";
import { useRouter } from "next/navigation";
import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
type formData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const SignIn = () => {
  const [loading, setLoading] = useState(false);
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

  const [show, setShow] = useState<boolean>(false)

  const handleClick = ()=>{
    setShow(!show)
  }

  const handleSignInWithGoogle = async () => {
    await signFinally("http://127.0.0.1:3500/api/v1/users/loginUser", router);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rememberMe) {
      Cookies.set("rememberedUser", formData.email, { expires: 365 });
    } else {
      Cookies.remove("rememberedUser");
    }
    const url = "http://127.0.0.1:3500/api/v1/users/loginUser";
    setLoading(!loading);
    await handleRequest(formData, url, router);
    setLoading(false);
  };

  const handleForgotPasswordRedirect = ()=>{
    router.replace("/forgot_password");
  }
  return (
    <div>
      {loading && <div className="loading-bar"></div>}
      <div className="flex flex-row items-center h-screen lg:overflow-y-hidden">
        <div
          className="hidden  w-[50%] bg-cover bg-no-repeat  lg:flex flex-col items-center overflow-y-hidden justify-center"
          style={{
            backgroundImage: `url(/signinBackroundImage.png)`,
            backgroundSize: "cover",
            height: "100%",
          }}
        >
          <div className="my-[20%] pt-[3%] opacity-70 w-[60%] h-fit  rounded-lg flex flex-col  bg-white">
            <div className="pl-[10%] my-[6%]  ">
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
            <label htmlFor="email" className="font-body">
              Email *
            </label>
            <input className="mt-2 w-[70%] border-[1px] border-gray-400 outline-none mb-2 h-[40px] rounded-lg indent-2 " type="email"
                id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }))
              }
            />


              <label className="font-semibold mt-[1px]" htmlFor="names">
                Password *
              </label>

            <div className="relative w-[70%] mb-4 rounded-lg sm:mt-1 lg:mt-[10px]">
              <input
                id="password"
                type={show ? "text" : "password"}
                className={`w-full  border  outline-none rounded-lg p-2 focus:border-gray-400`}
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

            <div className="flex flex-col md:flex-row mt-6 lg:flex-col xl:flex-row gap-3 md:gap-44 lg:gap-5 2xl:gap-44">
              <div  >
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
              <div className=" cursor-pointer w-[70% ">
                <span className="text-[#1F6115]  font-body" onClick={handleForgotPasswordRedirect}>
                  Forgot password?
                </span>
              </div>
            </div>

            <input
              type="submit"
              onClick={handleSubmit}
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
    </div>
  );
};

export default SignIn;
    