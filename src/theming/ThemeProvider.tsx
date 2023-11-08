import React, {createContext, useCallback, useMemo, useState} from 'react';

import colors from '../colors/colors';
import {typography} from '../colors/typography';

export const ThemeContext = createContext({});

export type Theme = {
  colors: Record<string, string>;
  typography: Record<string, number>;
  toggleTheme: () => void;
  isLightTheme: boolean;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

function ThemeProvider({children}: ThemeProviderProps) {
  const [isLightTheme, setLightTheme] = useState(false);
  const toggleTheme = useCallback(() => {
    setLightTheme(prevTheme => !prevTheme);
  }, []);

  const theme = useMemo(
    () => ({
      colors: isLightTheme ? colors.light : colors.dark,
      typography,
      toggleTheme,
      isLightTheme,
    }),
    [isLightTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
