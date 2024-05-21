import { ThemeProvider } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ComponentWrapper = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ComponentWrapper must be used within a ThemeContextProvider");
  }

  const { theme } = context;

  return (
    <ThemeProvider theme={theme}>
      ComponentWrapper
    </ThemeProvider>
  );
}

export default ComponentWrapper;
 