import { createContext, useContext } from 'react'

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export type ThemeContextType = {
  theme: Theme
  setTheme: (Theme: Theme) => void
  countryData: any
  setCountryData: (state: []) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Dark,
  setTheme: (theme) => console.warn('no theme provider'),
  countryData: [],
  setCountryData: (data) => console.warn('no theme provider'),
})

export const Context = () => useContext(ThemeContext)
