import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import ThemeSidebar from './components/ThemeSidebar'
import ThemeProvider from './context/theme'
import SidebarProvider from './context/sidebar'
import Routes from './Routes'

export default function App() {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <Header />
        <main>
          <ThemeSidebar />
          <Router>
            <Routes />
          </Router>
        </main>
      </ThemeProvider>
    </SidebarProvider>
  )
}
