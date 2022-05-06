import React from 'react'

import Header from './components/Header'
import Routes from './Routes'
import ThemeProvider from './context/theme'

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Routes />
    </ThemeProvider>
  )
}
