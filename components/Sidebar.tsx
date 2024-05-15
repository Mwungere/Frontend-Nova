"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListIcon from '@mui/icons-material/List';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import DrawerList from "./Drawer";
export const links = [
  {
    desc: "Dashboard",
    link: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    desc: "Automation",
    link: "/not-found",
    icon: <LightbulbIcon />,
  },
  {
    desc: "Irrigation",
    link: "/irrigation",
    icon: <WaterDropIcon />,
  },
  {
    desc: "Alerts",
    link: "/not-found",
    icon: <NotificationsIcon />,
  },
  {
    desc: "Security",
    link: "/security",
    icon: <SecurityIcon />,
  },
  {
    desc: "Health",
    link: "/health",
    icon: <LocalFloristIcon />,
  },
  {
    desc: "Support",
    link: "/not-found",
    icon: <ContactSupportIcon />,
  },
  {
    desc: "Settings",
    link: "/settings",
    icon: <SettingsIcon />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const router = useRouter();
  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const jwt = Cookies.get("jwt");
  const handleLogout = async () => {
    if (jwt?.length == 0 || !jwt) {
      toast.error("No cookie found please", {
        duration: 3000,
        position: "top-right",
      });
      router.replace("/signin");
    }

    if (jwt?.length != 0) {
      Cookies.remove("jwt");
      toast.success("Logged out successfully", { duration: 1000 });
      router.replace("/signin");
    }
  };



  return (
    <Box sx={{ width: "100%", height: "100%", bgcolor: "#1F6115" }}>
      <div className="flex justify-center items-center w-full h-full bg-white lg:hidden">
        <IconButton className="" onClick={toggleDrawer(true)}><ListIcon className=" font-body font-bold text-3xl" /></IconButton>
        <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
         {<DrawerList />}
        </Drawer>
      </div>
      <List className="hidden lg:block px-5">
        <div className=" flex items-center justify-start pl-8 gap-5 py-5">
          <Image src={"/logo.svg"} width={41} height={36} alt="logo" />
          <h1 className=" text-white font-body">Nova</h1>
        </div>
        {links.map(({ desc, link, icon }) => {
          const isActive = pathname.startsWith(link);
          return (
            <div key={desc} className=" mt-3">
              <Link href={link}>
                <ListItem
                  key={desc}
                  className={
                    isActive
                      ? ` font-bold font-body bg-[#3D3D3D] transition-all duration-500 ease-in-out`
                      : "font-body"
                  }
                >
                  <ListItemButton>
                    <ListItemIcon style={{ color: "white" }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={desc} style={{ color: "white" }} />
                  </ListItemButton>
                </ListItem>
              </Link>
            </div>
          );
        })}

        <ListItem className=" mt-32">
          <ListItemButton onClick={handleClickOpen}>
            <ListItemIcon style={{ color: "white" }}>
              {<ExitToAppIcon />}
            </ListItemIcon>
            <ListItemText className=" text-white">Log out</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to log out?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className=" mb-14">
            Logging out will end your current session and require you to log in
            again to access the application. If you're sure, click 'Logout' to
            securely log out of your account.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
            color="success"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleLogout()}
            style={{ backgroundColor: "#F22F2A", color: "#FFF" }}
          >
            Log out
          </Button>
        </DialogActions>
      </Dialog>
      <Toaster />
    </Box>
  );
};

export default Sidebar;
