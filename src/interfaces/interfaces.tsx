import { CreateThemeOptions } from "@rneui/themed";

export interface ThemeContextProps {
    darkMode: boolean;
    toggleTheme: () => void;
    theme: any;
        //theme: CreateThemeOptions;
}
export interface ThemeProviderProps {
    children: React.ReactNode;
}