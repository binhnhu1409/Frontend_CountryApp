import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'

import { ThemeContext } from '../../context/theme'
import { CountryProps } from '../../types'
import { RemoveFavoriteCountry, AddFavoriteCountry } from '../../redux/actions'
import './tablerow.scss'

const TableRow = ({ country }: CountryProps) => {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  let languageArray: string[] = []
  if (country.languages) {
    languageArray = Object.keys(country.languages)
  }

  return (
    <tr className="countriesRow">
      <td className="countriesRow_items">
        <img
          className="countriesRow__img"
          src={country.flags}
          alt={`${country.name} flag`}
        />
      </td>
      <td className="countriesRow_items">
        <Link
          className="countriesRow_link"
          to={`/countries/${country.name.common}`}
        >
          {country.name}
        </Link>
      </td>
      <td className="countriesRow_items">
        {languageArray.map((keyName, i) => (
          <ul key={i}>
            <li>{country.languages[keyName]}</li>
          </ul>
        ))}
      </td>
      <td className="countriesRow_items">{country.population}</td>
      <td className="countriesRow_items">{country.region}</td>
      <td className="countriesRow_items">
        {country.isFavorite ? (
          <button
            className="countriesRow_button"
            style={{ color: theme.foreground }}
            onClick={() => dispatch(RemoveFavoriteCountry(country))}
          >
            <BsFillBookmarkPlusFill className="countriesRow__icon" />
          </button>
        ) : (
          <button
            className="countriesRow_button"
            style={{ color: '#9E9E9E' }}
            onClick={() => dispatch(AddFavoriteCountry(country))}
          >
            <BsFillBookmarkPlusFill className="countriesRow__icon" />
          </button>
        )}
      </td>
    </tr>
  )
}

export default TableRow
