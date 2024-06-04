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
  Collapse,
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
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import DrawerList from "./Drawer";
import SyncLockIcon from '@mui/icons-material/SyncLock';
import { Camera } from "@mui/icons-material";

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
    children: [
      { desc: "Security", link: "/security", icon: <SyncLockIcon/> },
      { desc: "Security Controls", link: "/security/camControls", icon: <Camera/> },
    ],
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
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);
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

  const handleLogout = async () => {
    const jwt = Cookies.get("jwt");
    if (!jwt) {
      toast.error("No cookie found. Please log in.", { duration: 3000, position: "top-right" });
      router.replace("/signin");
    } else {
      Cookies.remove("jwt");
      toast.success("Logged out successfully", { duration: 1000 });
      router.replace("/signin");
    }
  };

  const handleSecurityToggle = () => {
    setSecurityOpen(!securityOpen);
  };

  return (
    <Box sx={{ width: "100%", height: "100%", bgcolor: "#1F6115", overflowX: "hidden", overflowY: "hidden" }}>
      <div className="flex justify-center items-center w-full h-full bg-white lg:hidden">
        <IconButton onClick={toggleDrawer(true)}><ListIcon className=" font-body font-bold text-3xl" /></IconButton>
        <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
          <DrawerList />
        </Drawer>
      </div>
      <List className="hidden lg:block px-5 overflow-y-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        <div className="flex items-center justify-start pl-8 gap-5 py-5">
          <Image src={"/logo.svg"} width={41} height={36} alt="logo" />
          <h1 className="text-white font-body">Nova</h1>
        </div>
        {links.map(({ desc, link, icon, children }) => {
          const isActive = pathname.startsWith(link);
          return (
            <div key={desc} className="mt-3">
              {!children ? (
                <Link href={link}>
                  <ListItem
                    key={desc}
                    className={isActive ? "font-bold font-body bg-[#3D3D3D] transition-all duration-500 ease-in-out" : "font-body"}
                  >
                    <ListItemButton>
                      <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>
                      <ListItemText primary={desc} style={{ color: "white" }} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ) : (
                <div className=" ml-4 ">
                  <ListItemButton onClick={handleSecurityToggle} className={isActive ? "font-bold font-body bg-[#3D3D3D] transition-all duration-500 ease-in-out" : "font-body"}>
                    <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>
                    <ListItemText primary={desc} style={{ color: "white" }} />
                    {securityOpen ? <ExpandLessIcon style={{ color: "white" }} /> : <ExpandMoreIcon style={{ color: "white" }} />}
                  </ListItemButton>
                  <Collapse in={securityOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {children.map(({ desc, link, icon }) => {
                        const isChildActive = pathname === link;
                        return (
                          <Link href={link} key={desc}>
                            <ListItemButton sx={{ pl: 4 }} className={isChildActive ? "font-bold font-body bg-[#3D3D3D] transition-all duration-500 ease-in-out" : "font-body"}>
                              <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>
                              <ListItemText primary={desc} style={{ color: "white" }} />
                            </ListItemButton>
                          </Link>
                        );
                      })}
                    </List>
                  </Collapse>
                </div>
              )}
            </div>
          );
        })}

        <ListItem className="mt-32">
          <ListItemButton onClick={handleClickOpen}>
            <ListItemIcon style={{ color: "white" }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText className="text-white">Log out</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to log out?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="mb-14">
            Logging out will end your current session and require you to log in again to access the application. If you're sure, click 'Logout' to securely log out of your account.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus color="success" variant="outlined">Cancel</Button>
          <Button onClick={handleLogout} style={{ backgroundColor: "#F22F2A", color: "#FFF" }}>Log out</Button>
        </DialogActions>
      </Dialog>
      <Toaster />
    </Box>
  );
};

export default Sidebar;
