import React, { FC } from 'react'
import ThemeContextProvider from './ThemeContext';

interface ContextProviersProps {
    children: React.ReactNode;
  
}
const ContextProviders : FC<ContextProviersProps> = ({children}) => {
  return (
    <ThemeContextProvider>{children}</ThemeContextProvider>
  )
}

export default ContextProviders