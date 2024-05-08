"use client";
import Image from "next/image";
import RecoverEmail from "../../public/RecoverEmail.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const RecoveryEmail = () => {
  const [recoveryEmail, setRecoveryEmail] = useState<String | null>();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Your email is ", recoveryEmail);
    router.replace("/go-email");
  };
  return (
    <div className="flex flex-row w-full">
      <div className="w-[50%]">
        <Image
          className="w-full h-screen"
          src={RecoverEmail}
          alt="Recovery background image"
        />
      </div>

      <div className="pl-[5%]  pt-[5%] w-[50%]">
        <div className="w-[90%]">
        <div className="flex flex-row justify-between w-full">
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

        <div className="pt-[5%] w-full">
          <h1 className="text-[2em] pb-[5px] font-bold mb-[2%]">
            Forget password
          </h1>
          <p className="text-gray-400 mb-[3%]">
            Please Enter your registered email to reset your password
          </p>
          <div className="">
            <form action="" className="flex flex-col ">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={(e) => setRecoveryEmail(e.target.value)}
                className="border-[2px] indent-3 border-gray-400 p-1 mt-[2%] rounded-lg w-[60%] outline-gray-400"
              />
              <input
                className="bg-[#1F6115] text-white py-[1.5%] w-[50%] mt-[18%] rounded-lg"
                type="submit"
                onClick={handleSubmit}
                value={"Recover Password"}
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
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryEmail;
