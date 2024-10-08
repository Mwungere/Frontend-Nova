"use client"

import Irrigation from "@/components/Irrigation/Irrigation";
import { UserContextProvider } from "@/components/contexts/UserContext";
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
