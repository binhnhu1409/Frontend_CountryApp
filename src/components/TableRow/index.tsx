import React from 'react'
import { Link } from 'react-router-dom'

import { CountryProps } from '../../types'

const TableRow = ({ country }: CountryProps) => {
  return (
    <tr className="countriesRow">
      <td>
        <img
          className="countriesRow__img"
          src={country.flags}
          alt={`${country.name} flag`}
        />
      </td>
      <td>
        <Link
          className="countriesRow_link"
          to={`/countries/${country.name.common}`}
        >
          {country.name}
        </Link>
      </td>
      {/* <td>
        {country.language.map(language => (
          <ul key={language.name}>
            <li>
              {language.name}
            </li>
          </ul>
        ))}
      </td> */}
      <td>{country.population}</td>
      <td>{country.region}</td>
    </tr>
  )
}

export default TableRow
