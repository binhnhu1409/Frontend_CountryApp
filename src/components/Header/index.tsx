import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

import './header.scss'
import { ThemeContext } from '../../context/theme'
import { SidebarContext } from '../../context/sidebar'
import { AppState } from '../../types'

const Header = () => {
  const { isToggle, toggleFunction } = useContext(SidebarContext)
  const { theme } = useContext(ThemeContext)
  const favoriteCountries = useSelector(
    (state: AppState) => state.country.favoriteCountries
  )

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
              <span
                style={{ color: theme.foreground }}
                className="navbar__favorite"
              >
                {favoriteCountries.length}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
