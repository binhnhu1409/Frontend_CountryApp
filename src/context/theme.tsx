import React, { useState, createContext, ReactNode } from 'react'

type ThemeContextType = {
  theme: any
  switchTheme: (clickedTheme: any) => void
}

export const themes = {
  purple: {
    foreground: '#E3CDF6',
  },
  blue: {
    foreground: '#CAF0F8',
  },
  green: {
    foreground: '#C3E5AE',
  },
  red: {
    foreground: '#FBC8C8',
  },
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.purple,
  switchTheme: () => {},
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(themes.purple)
  const switchTheme = (clickedTheme: any) => {
    setTheme(clickedTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
