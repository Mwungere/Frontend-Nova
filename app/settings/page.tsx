"use client";
import CustomHeader from "@/components/CustomHeader";
import SettingsNavbar from "@/components/Settings/SettingsNavbar";
import Sidebar from "@/components/Sidebar";
import { Settings } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface Credentials {
  fullName: string;
  username: string;
  email: string;
  newPassword: string;
  currentPassword: string;
  phoneNumber: string;
}

import PhoneNumberInput from "@/components/phone/PhoneInput";
const page = () => {
  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FieldValues>();

  const [credentials, setCredentials] = useState<Credentials>({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    currentPassword: "",
    newPassword: "",
  });
  const submitForm: SubmitHandler<FieldValues> = (data) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      phoneNumber: data.phoneNumber,
    }));
    console.log(credentials);
  };

  return (
    <div className=" w-full h-max flex">
      <div className=" w-1/4 h-screen">
        <Sidebar />
      </div>
      <div className=" w-3/4">
        <div className=" w-full h-[10%]">
          <CustomHeader
            heading="Account Settings"
            icon={<Settings color="success" />}
          />
        </div>

        <div className=" w-full h-[90%] bg-[#EDF2FA]">
          <div className=" w-full h-[10%]">
            <SettingsNavbar />
          </div>
          <form
            action=""
            className=" w-full"
            onSubmit={handleSubmit(submitForm)}
          >
            <div className=" flex w-full">
              <div className=" w-1/2 p-10 flex flex-col space-y-[5%]">
                <div className=" w-full flex flex-col space-y-[1%]">
                  <label
                    htmlFor="fullname"
                    className=" font-body text-[#929eb5]"
                  >
                    Full name
                  </label>
                  <TextField
                    fullWidth
                    placeholder="Enter your full name "
                    name="fullname"
                  />
                </div>
                <div className=" w-full flex flex-col space-y-[1%]">
                  <label
                    htmlFor="fullname"
                    className=" font-body text-[#929eb5]"
                  >
                    Username
                  </label>
                  <TextField
                    fullWidth
                    placeholder="Enter your new username"
                    name="username"
                    value={credentials?.username}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setCredentials((prevCredentials) => ({
                        ...prevCredentials,
                        username: event.target.value,
                      }));
                    }}
                  />
                </div>
                <div className=" w-full flex flex-col space-y-[1%]">
                  <label
                    htmlFor="currentPassword"
                    className=" font-body text-[#929eb5]"
                  >
                    Current Password
                  </label>
                  <TextField
                    fullWidth
                    placeholder="Enter your current password"
                    className=" font-body text-[#929eb5]"
                    name="currentPassword"
                    value={credentials?.currentPassword}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setCredentials((prevCredentials) => ({
                        ...prevCredentials,
                        currentPassword: event.target.value,
                      }));
                    }}
                    type="password"
                  />
                </div>
              </div>
              <div className=" w-1/2 p-10 flex flex-col space-y-[5%]">
                <div className=" w-full flex flex-col space-y-[1%]">
                  <label htmlFor="email" className=" font-body text-[#929eb5]">
                    Email
                  </label>
                  <TextField
                    fullWidth
                    placeholder="Enter your email"
                    name="email"
                    value={credentials?.email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setCredentials((prevCredentials) => ({
                        ...prevCredentials,
                        email: event.target.value,
                      }));
                    }}
                  />
                </div>
                <div className=" w-full flex flex-col space-y-[1%]">
                  <label
                    htmlFor="phoneNumber"
                    className=" font-body text-[#929eb5]"
                  >
                    Phone number
                  </label>
                  <PhoneNumberInput
                    control={control}
                    setValue={setValue}
                    id="phoneNumber"
                    errors={errors}
                    isSubmitted={isSubmitted}
                  />
                </div>
                <div className=" w-full flex flex-col space-y-[1%]">
                  <label
                    htmlFor="newPassword"
                    className=" font-body text-[#929eb5]"
                  >
                    New Password
                  </label>
                  <TextField
                    fullWidth
                    placeholder="Enter your new password"
                    name="username"
                    value={credentials?.newPassword}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setCredentials((prevCredentials) => ({
                        ...prevCredentials,
                        newPassword: event.target.value,
                      }));
                    }}
                    type="password"
                  />
                </div>
              </div>
            </div>
            <div className="pl-[4%] flex flex-row mt-[20%] gap-[5%]">
              <div>
                <button
                  type="submit"
                  className="bg-[#1F6115]  text-white  px-6  py-3 rounded-md font-bold  "
                >
                  Update profile
                </button>
              </div>
              <div>
                <button className="  text-[#4C535F]  px-6  py-3 rounded-md font-bold  ">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
