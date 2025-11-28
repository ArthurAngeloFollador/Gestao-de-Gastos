import { createContext } from "react";

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// **APENAS** o context (não exporta componentes)
export const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});
