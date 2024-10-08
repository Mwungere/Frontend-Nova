"use client"
import React, { createContext, useEffect, useMemo, useState, ReactNode, FC } from "react";

import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff5252', 
    },
    background: {
      default: '#20242c', 
      paper: '#292d36', 
    },
    text: {
      primary: '#ffffff', 
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
