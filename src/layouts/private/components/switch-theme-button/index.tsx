import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "../../../../hooks/use-theme"
import * as S from './styles'

export function SwitchThemeButton() {
  const { theme, themeAppearance, handleChangeThemeAppearence } = useTheme()
  
  const handleSwitchTheme = () => {
    const newTheme = themeAppearance === 'light' ? 'dark' : 'light'

    handleChangeThemeAppearence(newTheme)
  }

  return (
    <S.Button onClick={handleSwitchTheme}>
      {themeAppearance === 'light' && <MoonIcon color={theme.gray[1000]} />}
      {themeAppearance === 'dark' && <SunIcon color={theme.gray[1000]} />}
    </S.Button>
  )
}