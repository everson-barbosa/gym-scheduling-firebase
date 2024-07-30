export interface Theme {
  primary: {
    main: string
  }
  secondary: {
    main: string
  }
  gray: {
    ['0']: string
    ['1000']: string
  }
}

export type ThemeAppearance = 'light' | 'dark'