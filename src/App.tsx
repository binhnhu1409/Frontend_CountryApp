import React from 'react'

import Header from './components/Header'
import Routes from './Routes'
import ThemeSidebar from './components/ThemeSidebar'

import ThemeProvider from './context/theme'
import SidebarProvider from './context/sidebar'

export default function App() {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <Header />
        <ThemeSidebar />
        <Routes />
      </ThemeProvider>
    </SidebarProvider>
  )
}
