"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./themes/theme";
import ReduxProvider from "@/store/redux-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
  <ReduxProvider>
     <ChakraProvider>
     {children}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
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
