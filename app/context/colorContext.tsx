"use client"
import * as React from 'react';
import {  ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
 function DarkModeProvider({children}:{children:React.ReactNode}){
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  console.log(mode);
  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );


  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );


  return(
    <ColorModeContext.Provider value={colorMode }>
      <ThemeProvider theme={theme}>
        { children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

 
export default DarkModeProvider
 