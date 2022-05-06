import React, { useContext } from 'react'

import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { ThemeContext } from '../../context/theme'

const Header = () => {
  const { theme, switchTheme } = useContext(ThemeContext)
  console.log('THEME:', theme)
  return (
    <header style={{ backgroundColor: theme.foreground }}>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <h1 className="navbar__logo">Countries</h1>
          </li>
          <li>
            <BsFillBookmarkHeartFill />
          </li>
        </ul>
      </nav>
      <button onClick={switchTheme}>SWITCH</button>
    </header>
  )
}

export default Header
