"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./themes/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
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
  );
};

export default Providers;
