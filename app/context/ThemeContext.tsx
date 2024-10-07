// context/ThemeContext.tsx
"use client";

import React, { createContext, useEffect, useMemo, useState, ReactNode, FC } from "react";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";

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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<"light" | "dark">(prefersDarkMode ? "dark" : "light");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode, theme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
