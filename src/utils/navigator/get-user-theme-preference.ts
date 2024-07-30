import { ThemeAppearance } from "../../types/styles/Theme";

export function getUserThemePreference(): ThemeAppearance {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  return 'light'
}