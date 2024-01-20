import { ThemeContext } from "../context";
import { useContext } from "react";
import { ThemeContextProps } from "../interfaces/interfaces";

//export const useTheme = useContext<ThemeContextProps>(ThemeContext)

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
    };