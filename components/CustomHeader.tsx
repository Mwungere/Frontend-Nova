"use client";
import { CustomHeaderProps } from "@/types";
import { Lightbulb, Mail, Notifications, Search } from "@mui/icons-material";
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
import React, { useState } from "react";
const notifications = [
  {
    title: "Irrigation Successfully Done",
    time: "2024-01-26T12:00:00", // Use an actual timestamp
    icon: "✔️", // You can use MUI icons or emoji for simplicity
    new: true,
  },
  {
    title: "Low Level of Soil Moisture",
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
    title: "Warm Breeze in Atmosphere",
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
// ... (import statements)

const CustomHeader = ({ heading, icon }: CustomHeaderProps) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const formatTime = (timeString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(timeString).toLocaleTimeString("en-US", options);
  };

  return (
    <div className="w-full h-full flex p-5">
      <div className="flex w-[30%]">
        <div className=" text-xl mr-3">{icon}</div>
        <Typography variant="h4" component={"h1"} sx={{ fontWeight: "bold" }}>
          {heading}
        </Typography>
      </div>
      <div className="w-[70%]">
        <div className=" w-full flex space-x-10 ">
          {/* <div className=" border rounded-full w-[30%] flex">
          <input type="text" placeholder="search" className="" />
          <Search className="flex-1"/>
          </div> */}
          <TextField
            label="Search"
            variant="outlined"
            color="success"
            style={{
              // backgroundColor: "#EDF2FA",
              borderRadius: "500px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              sx: { borderRadius: 50, height:40 },
            }}
          />

          <div className=" flex w-[50%] justify-end">
            <div className="">
              <IconButton onClick={() => setOpen(true)}>
                <Badge
                  badgeContent={
                    notifications.filter((notification) => notification.new)
                      .length
                  }
                  color="secondary"
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
                  maxWidth: "700", // Adjust the width as needed
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

            <Stack direction={"row"} spacing={1}>
              <Avatar src="/man.jpeg" alt="John Doe" />
              <Stack direction={"column"}>
                <Typography variant="body1">John Doe</Typography>
                <Typography variant="body2">User Account</Typography>
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomHeader;
