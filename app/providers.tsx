"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";
import ReduxProvider from "@/store/redux-provider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
  <ReduxProvider>
      <AppRouterCacheProvider options={{ key:'css'  }}>
          {children}
      </AppRouterCacheProvider>
      <Next13ProgressBar
        height="4px"
        color="#0A2FFF"
        options={{ showSpinner: true }}
        showOnShallow
      />
  </ReduxProvider>
  );
};

export default Providers;
