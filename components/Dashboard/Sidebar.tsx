import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import Image from "next/image";

const links = [
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
    link: "/not-found",
    icon: <WaterDropIcon />,
  },
  {
    desc: "Alerts",
    link: "/not-found",
    icon: <NotificationsIcon />,
  },
  {
    desc: "Security",
    link: "/server-error",
    icon: <SecurityIcon />,
  },
  {
    desc: "Health",
    link: "/not-found",
    icon: <LocalFloristIcon />,
  },
  {
    desc: "Support",
    link: "/not-found",
    icon: <ContactSupportIcon />,
  },
  {
    desc: "Settings",
    link: "/not-found",
    icon: <SettingsIcon />,
  },
  {
    desc: "Log out",
    link: "/not-found",
    icon: <ExitToAppIcon />,
  },
];

const Sidebar = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", bgcolor: "#1F6115" }}>
      <List>
        <div className=" flex gap-5 px-8 py-5">
          <Image src={"/logo.svg"} width={41} height={36} alt="logo" />
          <h1 className=" text-white font-body">Nova</h1>
        </div>
        {links.map(({ desc, link, icon }) => (
          <Link href={link}>
            <ListItem key={desc}>
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>{icon}</ListItemIcon>
                <ListItemText primary={desc} style={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
