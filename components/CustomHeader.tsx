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
import { UserContext } from "./contexts/UserContext";
const notifications = [
  {
    title: "Irrigation Successfully Done",
    time: "2024-01-26T12:00:00", // Use an actual timestamp
    icon: "✔️", // You can use MUI icons or emoji for simplicity
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

const CustomHeader = ({ heading, icon }: CustomHeaderProps) => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const theme = useTheme();
  const pathname = usePathname();
  const searchRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    setSearchOpen(true);
  };

  const isActive = pathname.endsWith("/health");
  return (
    <div className="w-full h-full flex justify-between p-5">
      <div className="flex justify-center items-center">
        <div className="mr-3">{icon}</div>
        <Typography
          variant="h4"
          component={"h1"}
          sx={{ fontWeight: "bold" }}
          className={`${searchOpen ? "hidden" : ""} lg:flex font-body`}
        >
          {heading}
        </Typography>
      </div>
      <Stack
        direction={"row"}
        spacing={2}
        className=" flex justify-center items-center"
        ref={searchRef}
      >
        <TextField
          label="Search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            sx: { borderRadius: 50, backgroundColor: "#EDF2FA" },
          }}
          className={`${
            searchOpen ? "flex w-[400px]" : "hidden"
          } lg:flex lg:w-[500px] `}
        />
        <div>
          {/* <IconButton
            className={`flex lg:hidden ${searchOpen ? "hidden" : "flex"}`}
            onClick={handleSearch}
          >
            <Search />
          </IconButton> */}
        </div>

        <div>
          <IconButton onClick={() => setOpen(true)}>
            <Badge
              badgeContent={
                notifications.filter((notification) => notification.new).length
              }
              color="success"
            >
              <Notifications />
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

        {!isActive && (
          <div>
            <Stack direction={"row"} className="lg:flex" spacing={1}>
              <Avatar
                src={user?.pic}
              />
              <Stack direction={"column"}>
                <Typography variant="body1">
                  {user?.username}
                </Typography>
                <Typography variant="body2">
                  {user?.email}
                </Typography>
              </Stack>
            </Stack>
          </div>
        )}
        {isActive && (
          <div className="lg:hidden">
            <CustomizedMenus />
          </div>
        )}
      </Stack>
    </div>
  );
};
export default CustomHeader;
