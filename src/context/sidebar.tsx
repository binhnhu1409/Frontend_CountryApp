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
  const [isToggle, setIsToggle] = useState(false)
  const toggleFunction = () => {
    setIsToggle(!isToggle)
  }

  return (
    <SidebarContext.Provider value={{ isToggle, toggleFunction }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
