import React from 'react'
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import ThemeSidebar from './components/ThemeSidebar'
import ThemeProvider from './context/theme'
import SidebarProvider from './context/sidebar'
import { fetchCountries } from './redux/actions'

export default function App() {
  const dispatch = useDispatch()
  return (
    <SidebarProvider>
      <ThemeProvider>
        <Header />
        <ThemeSidebar />
        <button onClick={() => dispatch(fetchCountries())}>Fetch</button>
      </ThemeProvider>
    </SidebarProvider>
  )
}
