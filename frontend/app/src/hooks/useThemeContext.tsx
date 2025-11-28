import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContextValue";

export function useThemeContext() {
  return useContext(ThemeContext);
}
