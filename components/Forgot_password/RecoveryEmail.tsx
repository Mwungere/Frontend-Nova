"use client";
import Image from "next/image";
import RecoverEmail from "../../public/RecoverEmail.png";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Input } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
const RecoveryEmail = () => {
  const [recoveryEmail, setRecoveryEmail] = useState<String | null>();
  const [confirmationCode, setConfirmationCode] = useState<number | string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const toast = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    setIsLoading(true)
    e.preventDefault();
    const generatedCode = generateConfirmationCode();
    setConfirmationCode(generatedCode);
    const templateParams = {
      from_email: "verygoodmuhirwa2@gmail.com",
      to_email: recoveryEmail,
      message: `Dear customer , we appreciate you for collaborating and trusting Nova. Your confirmation code is ${generatedCode}`,
    };

    emailjs
      .send("service_346kmq2", "template_7j3zjir", templateParams, {
        publicKey: "Ne8MFb415mmePvu0B",
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setIsLoading(false)
          setTimeout(() => {
            toast({
              title: "Confirmation code",
              description: "Confirmation code sent successfully",
              duration: 5000,
              status: "success",
              position: "top-right",
            });
            router.replace("/go-email");
          }, 3000);
        },
        function (err) {
          console.log("FAILED...", err);
          setIsLoading(false)
        }
      );
  };

  function generateConfirmationCode() {
    let code = "";
    const codeLength = 6;
    for (let i = 0; i < codeLength; i++) {
      const digit = Math.floor(Math.random() * 10);
      code += digit;
    }
    return code;
  }

  return (
    <div className="flex flex-row w-[95%]">
      <div className="w-[50%]">
        <Image
          className="w-full h-screen"
          src={RecoverEmail}
          alt="Recovery background image"
        />
      </div>

      <div className=" pl-[5%] pt-[5%] w-[50%]">
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

        <div className="pt-[5%]   flex flex-col mx-auto  w-[80%]">
          <h1 className="text-[2em] pb-[5px] mx-auto font-bold mb-[5%]">
            Forget password
          </h1>
          <p className=" mb-[3%]">
            Please Enter your registered email to reset your password
          </p>
          <div className="">
            <form action="" className="flex flex-col ">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                size={"lg"}
                focusBorderColor="gray.400"
                onChange={(e) => setRecoveryEmail(e.target.value)}
                className="border-[2px] indent-3 border-gray-400 p-1 mt-[2%] rounded-lg w-[60%] outline-gray-400"
              />

              <Button
                mt={"15%"}
                _hover={{bgColor:"#1F6115"}}
                leftIcon={<EmailIcon />}
                onClick={handleSubmit}
                bg={"#1F6115"}
                isLoading={isLoading}
                loadingText="Sending verification ...."
                color={"white"}
                size={"lg"}
                variant="solid"
              >
                Send confirmation code
              </Button>
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
  );
};

export default RecoveryEmail;
