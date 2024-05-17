"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import ReduxProvider from "@/store/redux-provider";
import { theme } from "./themes/theme";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider,createTheme } from "@mui/material";
const themes = createTheme();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
  <ReduxProvider>
     <ChakraProvider>
      <AppRouterCacheProvider options={{ key:'css'  }}>
        <ThemeProvider theme={themes}>
          {children}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </ThemeProvider>
      </AppRouterCacheProvider>
      <Next13ProgressBar
        height="4px"
        color="#0A2FFF"
        options={{ showSpinner: true }}
        showOnShallow
      />
   </ChakraProvider>
  </ReduxProvider>
  );
};

export default Providers;
