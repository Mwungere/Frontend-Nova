"use client"
import React, { createContext, useEffect, useMemo, useState, ReactNode, FC } from "react";

import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";

// Dark and light theme definitions
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff5252', // Primary color for dark mode
    },
    background: {
      default: '#20242c', // Dark mode background
      paper: '#292d36', // Dark mode paper background
    },
    text: {
      primary: '#ffffff', // Text color for dark mode
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff', 
    },
    background: {
      default: '#ffffff', 
      paper: '#ffffff',  
    },
    text: {
      primary: '#000000',
    },
  },
});

interface ThemeContextValue {
  mode: "light" | "dark";
  toggleColorMode: () => void;
  theme: ReturnType<typeof createTheme>;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode, theme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
