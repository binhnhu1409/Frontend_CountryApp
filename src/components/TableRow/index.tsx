import React from 'react'
import { Link } from 'react-router-dom'

import { CountryProps } from '../../types'
import './tablerow.scss'

const TableRow = ({ country }: CountryProps) => {
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
    </tr>
  )
}

export default TableRow
