"use client";
import Image from "next/image";
import GoEmailBackground from "../../public/bg.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ComputerImage from "../../public/emailComputer.png";
const GoToEmail = () => {
  const router = useRouter();
  const handleGoToEmail = () => {
    router.replace("/verification");
  };
  return (
    <div className="w-full flex flex-row">
      <div
        className="hidden  w-[50%] bg-cover h-screen  bg-no-repeat  lg:flex flex-col items-center overflow-y-hidden justify-center"
        style={{
          backgroundImage: `url(${GoEmailBackground.src})`,
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

      <div className="w-[50%] pl-[5%] pt-[2%] ">
        <div className="flex flex-row justify-between w-full  ">
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

        <div className="w-full lg:pl-[25%] sm:pl ">
          <Image src={ComputerImage} alt="computer" />
        </div>
        <div className="text-center">
          <h1 className="text-gray-500 ">
            We have sent you a reset password link <br /> on your registered
            email address
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-[#1F6115] py-[2%] mx-auto mt-[4%] w-[60%] text-white rounded-xl"
            onClick={handleGoToEmail}
          >
            Go To Email
          </button>
        </div>
        {/* Don't have an account yet */}
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

export default GoToEmail;
