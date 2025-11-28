import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeContext } from "./themeContextValue";
import { dark, light } from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

// **APENAS** componentes neste arquivo (exporta só o provider)
export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <StyledThemeProvider theme={isDark ? dark : light}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
