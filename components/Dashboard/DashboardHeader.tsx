import { Mail, Notifications, Search } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const DashboardHeader = () => {

  return (
    <div className=" w-full h-full flex justify-between p-5">
      <div>
        <Typography variant="h4" component={"h1"}>
          Dashboard
        </Typography>
      </div>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Search"
          color="success"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />

        <IconButton sx={{ width: "48px", height: "48px" }}>
          <Badge variant="dot" color="error">
            <Notifications />
          </Badge>
        </IconButton>

        <Stack direction={"row"} spacing={1}>
          <Avatar src="/man.jpeg" alt="John Doe" />
          <Stack direction={"column"}>
            <Typography variant="body1">John Doe Smith</Typography>
            <Typography variant="body2">User Account</Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default DashboardHeader;
