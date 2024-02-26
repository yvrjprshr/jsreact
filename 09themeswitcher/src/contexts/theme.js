import { createContext, useContext } from "react";

// context with variables and functions
export const ThemeContext = createContext({
    themeMode: "light",
    lightTheme: ()=>{},
    darkTheme: ()=>{}
});

// context provider
export const ThemeProvider = ThemeContext.Provider

// custom hook to use theme context
export default function useTheme(){
    return useContext(ThemeContext);
}