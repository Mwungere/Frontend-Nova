"use client";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

type formData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type GoogleLoginResponseWithData = {
  profileObj: {
    email: string;
    name: string;
  };
};

type GoogleLoginResponseOfflineWithData = {
  error: string;
};

const SignUp = () => {
  const schema: ZodType<formData> = z.object({
      username: z.string().min(3).max(50),
      email: z.string().email(),
      password: z.string().min(4).max(50),
      confirmPassword: z.string().min(4).max(50),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const { register, handleSubmit } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const submitData =async (data: formData) => {
    console.log("It worked", data);
    
    try {
      const res = await axios.post("http://127.0.0.1:3500/users/registerUser", data);
      

    } catch (error) {
      console.error("An error occurred while sending the request:", error);
    } 
  };

  return (
    <div className="flex flex-col lg:flex-row items-center overflow-x-hidden md:overflow-hidden">
      <div className="w-full lg:w-1/2 p-4 lg:p-8 bg-white">
        <div className="flex flex-col items-center">
          <div className=" w-full flex lg:-mt-[5%] justify-around lg:justify-between">
            <div className=" flex gap-3">
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
            <Link href="/" className=" font-body mt-[6%] md:mt-[3%]">
              Home
            </Link>
          </div>
          <h1 className="font-lexend font-bold text-3xl lg:text-4xl text-[#232A42] mb-4">
            Create An Account
          </h1>
          <p className="mt-[1em] text-[17px] font-body">
            Fill the fields below to get started{" "}
          </p>
          <div className="pt-[2em] pb-[1em]">
            <Button />
          </div>
          <div className="flex flex-row">
            <hr className="w-[20%] self-center" />
            <p>or</p>
            <hr className="w-[20%] self-center" />
          </div>
          <form
            className="flex flex-col w-full px-[20%] lg:px-[10%]"
            onSubmit={handleSubmit(submitData)}
          >
            <label htmlFor="names" className="mb-[1em] font-body">
              Names *
            </label>
            <input
              className="border-gray-400 outline-gray-400 border-[1px] mb-[3%] w-full lg:w-[100%] rounded-md h-[50px] lg:h-[35px] indent-3"
              type="text"
              id="names"
              {...register("username")}
            />
            <label htmlFor="email" className="mb-[1em] font-body">
              Email *
            </label>
            <input
              className="border-gray-400 outline-gray-400 border-[1px] mb-[3%] w-full lg:w-[100%] rounded-md h-[50px] lg:h-[35px] indent-3"
              type="email"
              id="email"
              {...register("email")}
            />
            <label htmlFor="password" className="mb-[1em] font-body">
              Password *
            </label>
            <input
              className="border-gray-400 outline-gray-400 border-[1px] mb-[3%] w-full lg:w-[100%] rounded-md h-[50px] lg:h-[35px] indent-3"
              type="password"
              id="password"
              {...register("password")}
            />
            <label htmlFor="confirmPassword" className="mb-[1em] font-body">
              Confirm Password *
            </label>
            <input
              className="border-gray-400 outline-gray-400 border-[1px] mb-[3%] w-full lg:w-[100%] rounded-md h-[50px] lg:h-[35px] indent-3"
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            <input
              type="submit"
              className="text-white h-[50px] cursor-pointer font-lexend mt-[1em] w-full lg:w-[100%] border-none rounded-lg bg-[#1F6115]"
              value={"Sign up"}
            />
          </form>
          <div className="pt-[1em]">
            <p className="text-gray-300 font-lexend">
              Already have an account ?{" "}
              <Link
                href="/signin"
                className="text-[#1F6115] cursor-pointer font-body"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full lg:w-1/2 h-80 pt-[20%] xl:pt-[15%] px-[10%] lg:h-screen bg-cover bg-no-repeat hidden lg:block"
        style={{
          backgroundImage: `url(/background.png)`,
          backgroundSize: "cover",
        }}
      >
        <div className=" flex flex-col items-center justify-center opacity-70 bg-white p-[15%]">
          <h1 className="text-[#1F6115] text-4xl lg:text-5xl font-body font-bold mb-4">
            Start your journey with us
          </h1>
          <p className="text-[#232A42] text-lg lg:text-xl mb-4 font-body">
            Reviving agriculture with Innovation
          </p>
          <p className="text-[#232A42] text-lg lg:text-xl font-body">
            Monitoring Farm Activities Simplified
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
