import React, { useContext } from 'react'
import { FaPaintBrush } from 'react-icons/fa'
import { FaLongArrowAltLeft } from 'react-icons/fa'

import './themeSidebar.scss'
import { SidebarContext } from '../../context/sidebar'
import { ThemeContext, themes } from '../../context/theme'

const ThemeSidebar = () => {
  const { isToggle, toggleFunction } = useContext(SidebarContext)
  const { switchTheme } = useContext(ThemeContext)

  return (
    <div className={isToggle ? 'sidebar' : 'noSidebar'}>
      <div className="sidebar__header">
        <ul className="sidebar__titleList">
          <li className="sidebar__titleItem theme__white">
            <h2>Switch Theme</h2>
          </li>
          <li className="sidebar__titleItem">
            <button className="sidebar__icon" onClick={toggleFunction}>
              <FaLongArrowAltLeft />
            </button>
          </li>
        </ul>
      </div>
      <div>
        <ul className="sidebar__colorList">
          <li className="sidebar__colorItem">
            <button
              className="theme theme__purple"
              onClick={() => switchTheme(themes.purple)}
            >
              <FaPaintBrush className="theme__icon" />
              <span className="theme__text">Purple</span>
            </button>
          </li>
          <li className="sidebar__colorItem">
            <button
              className="theme theme__blue"
              onClick={() => switchTheme(themes.blue)}
            >
              <FaPaintBrush className="theme__icon" />
              <span className="theme__text">Blue</span>
            </button>
          </li>
          <li className="sidebar__colorItem">
            <button
              className="theme theme__green"
              onClick={() => switchTheme(themes.green)}
            >
              <FaPaintBrush className="theme__icon" />
              <span className="theme__text">Green</span>
            </button>
          </li>
          <li className="sidebar__colorItem">
            <button
              className="theme theme__red"
              onClick={() => switchTheme(themes.red)}
            >
              <FaPaintBrush className="theme__icon" />
              <span className="theme__text">Red</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ThemeSidebar
