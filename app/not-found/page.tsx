import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import Sidebar from "@/components/Dashboard/Sidebar";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex ">
      <div className="justify-center items-center m-auto">
        <Image
          src={"/notfound.svg"}
          width={312}
          height={160}
          alt="image"
          className=" self-center m-auto my-10"
        />
        <Typography variant="h1">Page Not Found</Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "400px", alignSelf: "center", margin: "auto", marginTop: "2.5rem" }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Button variant="outlined" color="success" sx={{marginTop:"2.5rem", alignItems: "center"}}>
          <Link href={"/dashboard"} className="">Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
