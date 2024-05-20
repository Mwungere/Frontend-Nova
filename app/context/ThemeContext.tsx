import { useMediaQuery } from "@mui/material";
import { createContext, useState } from "react"; 

export const ThemeContext = createContext()

export default function ThemeContextProvider({children}){
    const prefersMode = useMediaQuery('(prefers-color-scheme: dark)')
     const [mode, setMode] = useState()
    return(
        
        <ThemeContext.Provider value={{}}>
            {children}
        </ThemeContext.Provider>
    )
}