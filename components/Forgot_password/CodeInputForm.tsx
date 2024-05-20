import React, { useState, useRef, useEffect, ChangeEvent, FormEvent, RefCallback } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useAppSelector } from '@/store/store';
const CodeInputForm: React.FC = () => {
  const [codes, setCodes] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const userEmail = useAppSelector((state) => state.verification.email);
  const router = useRouter()
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, codes.length);
  }, [codes.length]);

  const handleInputChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length <= 1) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);

      if (value && index < codes.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = event.clipboardData.getData('text').slice(0, codes.length).split('');
    setCodes(pasteData);
    inputRefs.current[pasteData.length - 1]?.focus();
  };

  const handleKeyDown = (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async(event: FormEvent) => {
    event.preventDefault();
    const code = codes.join('');
    console.log('Entered code:', code);


    const formData = {
      email: userEmail,
      code: code,
    };
    const res = await axios.post(
      "http://127.0.0.1:3500/api/v1/confirmation/verify_code",
      formData,
      {}
    );
    try {
      if (res.status == 200) {
        toast.success("Confirmation code sent successfully",{duration:3000, position:"top-right"})
        router.replace("/new-password")    
      } else if (res.status == 404) {
        toast.error("Verification error", {duration:3000, position:"top-right"});
      }
    } catch (error) {
        toast.error("Verification error", {duration:3000, position:"top-right"});
};
  }

  return (
    <form className="max-w-sm mx-auto mt-[4%]  flex flex-col justify-center items-center" onSubmit={handleSubmit}>
      <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
        {codes.map((code, index) => (
          <div key={index}>
            <label htmlFor={`code-${index + 1}`} className="sr-only">{`Code ${index + 1}`}</label>
            <input
              type="text"
              maxLength={1}
              id={`code-${index + 1}`}
              className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-primary-500 focus:border-primary-500 outline-none"
              value={code}
              onChange={handleInputChange(index)}
              onPaste={handlePaste}
              onKeyDown={handleKeyDown(index)}
              ref={(el: HTMLInputElement | null) => {
                if (el) inputRefs.current[index] = el;
              }}
              required
            />
          </div>
        ))}
      </div>
     
      <div className=" w-full">
          <button
            onClick={handleSubmit}
            className="bg-[#1F6115]   py-[5%]px-[5%] mx-auto mt-[4%] w-[80%] flex justify-center items-center h-[40px] text-white rounded-xl"
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
    </form>
  );
};

export default CodeInputForm;
