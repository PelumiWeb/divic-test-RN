// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ThemeProvider as ReStyleThemeProvider } from "@shopify/restyle";
import themes, { Theme } from "@/constants/theme";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(themes.lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.lightTheme ? themes.darkTheme : themes.lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ReStyleThemeProvider theme={theme}>{children}</ReStyleThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
