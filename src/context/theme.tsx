import React, { useState, createContext, ReactNode } from 'react'

export const themes = {
  light: {
    foreground: '#000',
  },
  dark: {
    foreground: '#fff',
  },
}

export const ThemeContext = createContext({
  theme: themes.light,
  switchTheme: () => {},
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [context, setContext] = useState({
    theme: themes.light,
    switchTheme: () => {
      setContext((current) => ({
        ...current,
        theme: current.theme === themes.light ? themes.dark : themes.light,
      }))
    },
  })

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
