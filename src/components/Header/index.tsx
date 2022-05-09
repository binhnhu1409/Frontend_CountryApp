import React, { useContext } from 'react'

import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

import './header.scss'
import { ThemeContext } from '../../context/theme'
import { SidebarContext } from '../../context/sidebar'

const Header = () => {
  const { isToggle, toggleFunction } = useContext(SidebarContext)
  const { theme, switchTheme } = useContext(ThemeContext)
  console.log('THEME:', theme)

  return (
    <header
      style={{ backgroundColor: theme.foreground }}
      className={isToggle ? 'head__withSidebar' : 'head'}
    >
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <button className="navbar__icon" onClick={toggleFunction}>
              <FaBars />
            </button>
          </li>
          <li className="navbar__item">
            <h1 className="navbar__logo">Countries</h1>
          </li>
          <li className="navbar__item navbar__push">
            <button className="navbar__icon">
              <BsFillBookmarkHeartFill />
            </button>
          </li>
        </ul>
      </nav>
      <button onClick={switchTheme}>SWITCH</button>
    </header>
  )
}

export default Header
