import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { BsFillBookmarkDashFill } from 'react-icons/bs'

import { AppState } from '../../types'
import { ThemeContext } from '../../context/theme'
import { SidebarContext } from '../../context/sidebar'
import { RemoveFavoriteCountry } from '../../redux/actions'
import './favoriteCountries.scss'

const FavoriteCountries = () => {
  const dispatch = useDispatch()
  const countries = useSelector(
    (state: AppState) => state.country.favoriteCountries
  )
  const { theme } = useContext(ThemeContext)
  const { isToggle, toggleFunction } = useContext(SidebarContext)

  return (
    <div className={isToggle ? 'sidebar' : 'noSidebar'}>
      <div className="sidebar__header">
        <ul className="sidebar__titleList">
          <li className="sidebar__titleItem theme__white">
            <h2>Your Favorite List</h2>
          </li>
          <li className="sidebar__titleItem">
            <button className="sidebar__icon" onClick={toggleFunction}>
              <FaLongArrowAltLeft />
            </button>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          {countries.map((country) => (
            <li key={country.name.common}>
              <p>{country.name.common}</p>
              <button
                className="favoriteSide__button"
                style={{ color: theme.foreground }}
                onClick={() => dispatch(RemoveFavoriteCountry(country))}
              >
                <BsFillBookmarkDashFill />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FavoriteCountries
