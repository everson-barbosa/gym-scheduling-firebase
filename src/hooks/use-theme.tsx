import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../contexts/theme-context";

export const useTheme = (): ThemeContextProps => useContext(ThemeContext)