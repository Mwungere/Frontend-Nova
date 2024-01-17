"use client";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import signInBackgroundImage from "../Images/signinBackroundImage.png";
import welcomeLogo from "../Images/logo_welcome.png";
import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
type formData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const SignIn = () => {
  const schema: ZodType<formData> = z.object({
    email: z.string().email(),
    password: z.string().min(4).max(50),
    rememberMe: z.boolean(),
  });
  console.log("Form initialized");
  

  const { register, handleSubmit } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const submitData: (data: formData) => Promise<void> = async (data) => {
  console.log("submitData function called");
  console.log("form data:", data);
  
    try {
      const res = await axios.post("http://127.0.0.1:3500/users/loginUser", data);
      console.log(res.data, data); 
    } catch (error) {
      console.error("Faced an error", error);
    }
  };
  

  return (
    <div className="flex flex-row items-center h-screen lg:overflow-y-hidden ">
      <div
        className="hidden  w-[50%] bg-cover bg-no-repeat  lg:flex flex-col items-center overflow-y-hidden justify-center"
        style={{
          backgroundImage: `url(/background.png)`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <div className="my-[20%] pt-[3%] opacity-70 w-[60%] h-fit ml-[2%]  flex flex-col  bg-white">
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

      <div className=" w-[70%] lg:w-[50%] pt-[3%] h-full pl-[10%] mx-auto">
        <div className=" flex justify-between">
          <div className=" flex gap-2 -mt-[1%] lg:-mt-[5%]">
            <Image
              src="/logo.svg"
              width={50}
              height={50}
              className="mb-[2em]  h-[80px] "
              alt="project logo"
            />

            <h1 className="font-body text-2xl font-bold mt-6 text-[#232A42]">
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
        <h1 className="font-lexend text-3xl font-bold mt-[20%] lg:mt-[15%] text-black">
          Hey, hello
        </h1>
        <p className="mt-[1em] font-body text-[17px]">
          Enter the information you entered while registering{" "}
        </p>
        <div className="pt-[2em] pb-[1em]"></div>
        <form className="flex flex-col" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
           e.preventDefault();
           console.log("Form submitted");
           handleSubmit(submitData)();
        }}>
          <label htmlFor="email" className="mb-[1em] font-body">
            Email *
          </label>
          <input
            className="border-gray-400 outline-gray-400 border-[1px]  mb-[3%] w-[100%] lg:w-[90%] 2xl:w-[60%] rounded-md h-[50px] lg:h-[35px] indent-3"
            type="email"
            id="email"
            {...register("email")}
          />

          <label htmlFor="password" className="mb-[1em] font-body">
            Password *
          </label>
          <input
            className="border-gray-400 border-[1px]  mb-[3%] w-[100%] lg:w-[90%] 2xl:w-[60%] rounded-md h-[50px] lg:h-[35px] indent-3 outline-gray-400"
            type="password"
            id="password"
            {...register("password")}
          />

          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-3 md:gap-44 lg:gap-5 2xl:gap-44">
            <div>
              <input
                type="checkbox"
                value="rememberMe"
                className=" h-4 w-4 hover:cursor-pointer"
              />
              <span className="pl-[0.75em] font-body">Remember Me</span>
            </div>
            <div className=" cursor-pointer">
              <span className="text-[#1F6115] font-body">Forgot password?</span>
            </div>
          </div>

          <input
            type="submit"
            className="text-white h-[60px] cursor-pointer font-lexend mt-[1em] w-[100%] lg:h-[50px] lg:w-[90%] 2xl:w-[60%] border-none rounded-lg bg-[#1F6115]"
            value={"Login"}
          />
        </form>

        <div className="pt-[1em] mb-[2em]">
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
        <div className="flex flex-row mb-5">
          <hr className="w-[20%] self-center" />
          <p>or</p>
          <hr className="w-[20%] self-center" />
        </div>

        {/* <div className=" mb-[10%]">
          <Button />
        </div> */}
      </div>
    </div>
  );
};

export default SignIn;
