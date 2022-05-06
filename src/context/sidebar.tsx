import React, { useState, createContext, ReactNode } from 'react'

type SidebarContextType = {
  isToggle: boolean
  toggleFunction: () => void
}

export const SidebarContext = createContext<SidebarContextType>({
  isToggle: false,
  toggleFunction: () => {},
})

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState(false)
  const toggleFunction = () => {
    setToggle(!toggle)
  }

  return (
    <SidebarProvider value={{ toggle, toggleFunction }}>
      {children}
    </SidebarProvider>
  )
}

export default SidebarProvider
