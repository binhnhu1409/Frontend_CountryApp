import React from 'react'

import Header from './components/Header'
import ThemeSidebar from './components/ThemeSidebar'

import ThemeProvider from './context/theme'
import SidebarProvider from './context/sidebar'

export default function App() {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <Header />
        <ThemeSidebar />
      </ThemeProvider>
    </SidebarProvider>
  )
}
