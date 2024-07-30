import { createContext, ReactNode, useCallback, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme, ThemeAppearance } from "../types/styles/Theme";
import { getUserThemePreference } from "../utils/navigator/get-user-theme-preference";
import { lightTheme } from '../styles/themes/light-theme'
import { darkTheme } from '../styles/themes/dark-theme'

export interface ThemeContextProps {
  readonly themeAppearance: ThemeAppearance
  readonly theme: Theme
  readonly handleChangeThemeAppearence: (themeAppearance: ThemeAppearance) => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export interface ThemeProviderProps {
  children: ReactNode
}

const themeMapper: Record<ThemeAppearance, Theme> = {
  light: lightTheme,
  dark: darkTheme
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeAppearance, setThemeAppearance] = useState<ThemeAppearance>(getUserThemePreference())

  const theme = themeMapper[themeAppearance]

  const handleChangeThemeAppearence = useCallback(
    (themeAppearance: ThemeAppearance) => {
    setThemeAppearance(themeAppearance)
  }, [setThemeAppearance])

  return (
    <ThemeContext.Provider value={{
      theme,
      themeAppearance,
      handleChangeThemeAppearence
    }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}