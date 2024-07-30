import 'styled-components'
import { Theme } from '../../styles/themes/types/Theme'

declare module 'styled-component' {
  export interface DefaultTheme extends Theme {}
}