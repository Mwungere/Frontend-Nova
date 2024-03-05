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

    const userString = Cookies.get("nova_user");
    const user = userString ? JSON.parse(userString) : null;


    const firstNameSplitter = (name: string): string => {
      let firstLetter = "";
      for (let i = 0; i < name.length && i < 1; i++) {
        firstLetter = name[i];
      }
      return firstLetter;
    };

    const firstLetter = user? firstNameSplitter(user.displayName || user.names)  : "";
    return (
      <div className="w-full h-full flex justify-between p-5">
        <div className="flex">
          <div className="mt-[4%] mr-3">{icon}</div>
          <Typography variant="h4" component={"h1"} sx={{ fontWeight: "bold" }}>
            {heading}
          </Typography>
        </div>
        <Stack direction={"row"} spacing={2}>
          <TextField
            label="Search"
            variant="outlined"
            style={{}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              sx: { borderRadius: 50, backgroundColor: "#EDF2FA" },
            }}
          />

          <>
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
          </>

          <Stack direction={"row"} spacing={1}>
            <Avatar
              src={
                user && user.photoURL
                  ? user.photoURL.replace("http://", "https://") ||
                    "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
                  : "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
              }
              alt={firstLetter}
            />
            <Stack direction={"column"}>
              <Typography variant="body1">
                {user ? user.displayName || user.names : ""}
              </Typography>
              <Typography variant="body2">{user ? user.email : ""}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </div>
    );
  };
  export default CustomHeader;
