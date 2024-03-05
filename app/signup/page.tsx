"use client";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
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
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    names: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<string | null>();
  const handleSignUpWithGoogle = async () => {
     signFinally("http://127.0.0.1:3500/api/v1/users/registerUser", router);
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      const error = new Error("Password must be at least 6 characters");
      setErrors(error.message);
      toast.error(error.message, {
        duration: 5000,
        position: "top-right",
      });
    } else if (formData.password !== formData.confirmPassword) {
      const error = new Error("Passwords do not match");
      setErrors(error.message);
      toast.error(error.message, {
        duration: 5000,
        position: "top-right",
      });
    } else {
      setErrors(null);
      const url = "http://127.0.0.1:3500/api/v1/users/registerUser"
      await handleRequest(formData, url, router)
    }
  }
  return (
      <div className="flex md:flex-row sm:flex-col h-screen  lg:overflow-y-hidden  ">
        <div className="pl-[6%] pt-5 pr-5 sm:w-full md:w-[50%]  ">
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
            <h1 className=" text-black font-body mt-[3em]  mb-4 text-2xl font-semibold">
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

          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col  mt-4">
                <label className="font-semibold" htmlFor="names">
                  Names *
                </label>
                <input
                  className="border-gray-400 border-[1px] md:w-[80%] rounded-lg mt-3 indent-3 outline-gray-400  h-[35px] "
                  type="text"
                  name="names"
                  value={formData.names}
                  onChange={(e) =>
                    setFormData((prevData) => {
                      return { ...prevData, names: e.target.value };
                    })
                  }
                />
              </div>
              <div className="flex flex-col  mt-4">
                <label className="font-semibold" htmlFor="names">
                  Email *
                </label>
                <input
                  className="border-gray-400 md:w-[80%] border-[1px] rounded-lg mt-3 indent-3 outline-gray-400  h-[35px] "
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
              <div className="flex flex-col  mt-4">
                <label className="font-semibold" htmlFor="names">
                  Password *
                </label>
                <input
                  className={
                    errors
                      ? "border-red-900 border-[1px] md:w-[80%] rounded-lg mt-3 indent-3 outline-red-900  h-[35px] "
                      : "border-gray-400 border-[1px] md:w-[80%] rounded-lg mt-3 indent-3 outline-gray-400  h-[35px] "
                  }
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prevData) => {
                      return { ...prevData, password: e.target.value };
                    })
                  }
                />
              </div>
              <div className="flex flex-col  mt-4">
                <label className="font-semibold" htmlFor="names">
                  Confirm password *
                </label>
                <input
                  className={
                    errors
                      ? "border-red-900 border-[1px] md:w-[80%] rounded-lg mt-3 indent-3 outline-red-900  h-[35px] "
                      : "border-gray-400 border-[1px] md:w-[80%] rounded-lg mt-3 indent-3 outline-gray-400  h-[35px] "
                  }
                  type="password"
                  name="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData((prevData) => {
                      return { ...prevData, confirmPassword: e.target.value };
                    })
                  }
                />
              </div>
              <button
                type="submit"
                className="bg-[#1F6115] h-[50px] font-body text-white w-[60%] rounded-lg mt-6"
              >
                Sign Up
              </button>
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
  
}
export default SignUp;
