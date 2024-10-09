"use client"

import Irrigation from "@/components/Irrigation/Irrigation";
import { UserContextProvider } from "@/app/context/UserContext";
export interface SensorDataType {
  time: Date;
  temperature: string;  
  moisture: string;
}


const Page = () => {
  return (
    // <UserContextProvider>
        <Irrigation  />
    // </UserContextProvider>
  );
};

export default Page;
