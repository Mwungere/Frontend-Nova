"use client";
import VerificationBackground from "../../public/verificationBackground.png";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@chakra-ui/react";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/store";
import axios from "axios";
const VerificationMain = () => {
  const router = useRouter()
  const [confirmationCode, setConfirmationCode] = useState<string | undefined>();
  const userEmail = useAppSelector((state) => state.verification.email);
  const toast = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      email: userEmail,
      code: confirmationCode,
    };
    const res = await axios.post(
      "http://127.0.0.1:3500/api/v1/confirmation/verify_code",
      formData,
      {}
    );
    try {
      if (res.status == 200) {
        toast({
          title: "Confirmation code verification",
          description: res.data.message,
          status: "success",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        });
        router.replace("/new-password")    
      } else if (res.status == 404) {
        toast({
          title: "Verification error",
          description: res.data.message,
          status: "error",
          position: "top-right",
          isClosable: true,
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        title: "Verification error",
        description: res.data.message,
        status: "error",
        position: "top-right",
        isClosable: true,
        duration: 3000,
      });
    }
  };

  return (
    <div className="flex lg:flex-row">
      <div
        className="hidden  w-[50%] bg-cover h-screen  bg-no-repeat  lg:flex  items-center overflow-y-hidden justify-center"
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
      <div></div>

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
          <h1 className="font-bold font-lexend text-[1.2em]">
            Enter 6 Digit Code Sent <br /> To You{" "}
          </h1>
          <p className="mt-[3%] text-gray-400">
            Please enter the code sent to your email
          </p>
        </div>

        <div className="flex flex-col pt-[5%]  justify-center items-center py-5">
          <HStack>
            <PinInput
              size="lg"
              value={confirmationCode}
              onChange={(value) => setConfirmationCode(value)}
            >
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={handleSubmit}
            className="bg-[#1F6115] py-[2%] mx-auto mt-[4%] w-[30%] text-white rounded-xl"
          >
            Verify
          </button>
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
