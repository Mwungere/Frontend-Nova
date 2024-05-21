"use client"
import { createTheme, useMediaQuery, Theme } from "@mui/material";
import { createContext, useEffect, useState, ReactNode, FC } from "react"; 

interface ThemeContextValue {
  mode: boolean;
  setMode: (mode: boolean) => void;
  theme: Theme
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  const prefersMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<boolean>(prefersMode);

  useEffect(() => {
    setMode(prefersMode);
  }, [prefersMode]);

  const theme: Theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
