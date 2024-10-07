"use client";
import { CustomHeaderProps } from "@/types";
import {
  Lightbulb,
  LocalOfferSharp,
  Mail,
  Notifications,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Cookies from "js-cookie";
import React, { useState, useEffect, useRef, useContext } from "react";
import CustomizedMenus from "./Health/DropDown";
import { usePathname } from "next/navigation";
import { UserContext } from "../app/context/UserContext";
const notifications = [
  {
    title: "Irrigation Successfully Done",
    time: "2024-01-26T12:00:00", 
    icon: "✔️",
    new: true,
  },
  {
    title: "Motion Detected in the Field",
    time: "2024-01-26T13:30:00",
    icon: "📉",
    new: true,
  },
  {
    title: "Tank is Nearly Full",
    time: "2024-01-26T14:45:00",
    icon: "⚠️",
    new: false,
  },
  {
    title: "Motion detected in the Field",
    time: "2024-01-26T15:15:00",
    icon: "🌞",
    new: false,
  },
  {
    title: "Ph Level is High",
    time: "2024-01-26T16:00:00",
    icon: "🔬",
    new: true,
  },
  {
    title: "It’s a Rainy Day",
    time: "2024-01-26T17:30:00",
    icon: "🌧️",
    new: true,
  },
];

const CustomHeader = ({ heading, icon, subHeading }: CustomHeaderProps) => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const theme = useTheme();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const formatTime = (timeString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(timeString).toLocaleTimeString("en-US", options);
  };

  const user = useContext(UserContext)
  const firstNameSplitter = (name: string): string => {
    let firstLetter = "";
    for (let i = 0; i < name.length && i < 1; i++) {
      firstLetter = name[i];
    }
    return firstLetter;
  };



  // Focus on the search input when searchOpen is true
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Handle click outside of the search field to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };


  // const isActive = pathname.endsWith("/health");
  return (
    <div className="w-full h-full flex justify-between p-5">
      {
        searchOpen ? (
          <div ref={searchContainerRef} className=" w-full flex justify-center items-center border rounded-3xl pl-5 pr-2">
            <input
              type="text"
              ref={searchInputRef}
              className="h-full w-full rounded-3xl outline-none"
              placeholder="Type to search..."
            />
            <IconButton>
              <Search sx={{ fontSize: '30px' }} />
            </IconButton>
          </div>
        ) : (
          <div className="w-full h-full flex flex-row justify-between">

            <div className="flex justify-center items-center">
              <div className="mr-3 hidden lg:flex">{icon}</div>
              {subHeading ? (

                <Typography
                  variant="h5"
                  component={"h1"}
                  sx={{ fontWeight: "bold" }}
                  className={`lg:flex font-body`}
                >
                  <span className="font-semibold text-base">{heading}</span> <span className="text-[#838ea1] font-semibold text-base">/{" "}{subHeading}</span>
                </Typography>
              ) : (
                <Typography
                  variant="h5"
                  component={"h1"}
                  sx={{ fontWeight: "bold" }}
                  className={`lg:flex font-body font-bold`}
                >
                  {heading}
                </Typography>
              )
              }

            </div>
            <div
              className=" flex justify-center items-center"
            >
              <div className={`${searchOpen ? '' : 'hidden'}`}>
                <input type="text" />

              </div>
              <div>
                <IconButton
                  onClick={handleSearchClick}
                  className=" text-[10px]"
                >
                  <Search sx={{ fontSize: '30px' }} />
                </IconButton>
              </div>

              <div>
                <IconButton onClick={() => setOpen(true)} size="large">
                  <Badge
                    badgeContent={
                      notifications.filter((notification) => notification.new).length
                    }
                    color="success"
                  >
                    <Notifications sx={{ fontSize: '30px' }} />
                  </Badge>
                </IconButton>

                <Dialog
                  open={open}
                  onClose={() => setOpen(false)}
                  aria-labelledby="dialog-title"
                  aria-describedby="dialog-description"
                  sx={{
                    marginTop: "-200px",
                    marginRight: "-1300px",
                    maxWidth: "700",
                  }}
                >
                  <DialogTitle id="dialog-title">Notifications</DialogTitle>
                  <DialogContent>
                    <List>
                      {notifications
                        .slice()
                        .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
                        .map((notification, index) => (
                          <ListItem key={index}>
                            <ListItemAvatar>
                              <Avatar
                                sx={{
                                  backgroundColor: notification.new
                                    ? theme.palette.success.main
                                    : undefined,
                                }}
                              >
                                <Lightbulb />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={notification.title}
                              secondary={formatTime(notification.time)}
                              secondaryTypographyProps={{
                                color: notification.new
                                  ? "textPrimary"
                                  : "textSecondary",
                              }}
                            />
                          </ListItem>
                        ))}
                    </List>
                  </DialogContent>
                </Dialog>
              </div>



              <div className=" ml-5 flex justify-center items-center">
                <div className="flex justify-center items-center ">
                  <Avatar
                    src={user?.pic}
                    sx={{
                      marginTop: "-5px",
                    }}
                  />
                  <div className=" hidden lg:flex lg:flex-col">
                    <Typography variant="body1">
                      {user?.names}
                    </Typography>
                    <Typography variant="body2">
                      {user?.email}
                    </Typography>
                  </div>
                </div>
              </div>



              {/* {!isActive && (
          <div className=" flex justify-center items-center">
            <div className="lg:flex">
              <Avatar
                src={user?.pic}
              />
              <div className=" hidden md:flex flex-col">
                <Typography variant="body1">
                  {user?.username}
                </Typography>
                <Typography variant="body2">
                  {user?.email}
                </Typography>
              </div>
            </div>
          </div>
        )}
        {isActive && (
          <div className="lg:hidden">
            <CustomizedMenus />
          </div>
        )} */}
            </div>
          </div>
        )
      }
    </div>
  );
};
export default CustomHeader;
