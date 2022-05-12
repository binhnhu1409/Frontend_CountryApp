import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'
import TableRow from '../TableRow'
import { ThemeContext } from '../../context/theme'
import './table.scss'

const Table = () => {
  const { theme } = useContext(ThemeContext)
  const { isLoading, allCountries } = useSelector(
    (state: AppState) => state.country
  )

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          <table className="countriesTable">
            <thead
              style={{ color: theme.foreground }}
              className="countriesTable__header"
            >
              <tr>
                <th className="countriesTable__items">Flag</th>
                <th className="countriesTable__items">Name</th>
                <th className="countriesTable__items">Languages</th>
                <th className="countriesTable__items">Population</th>
                <th className="countriesTable__items">Region</th>
                <th className="countriesTable__items">Favorite</th>
              </tr>
            </thead>
            <tbody className="countriesTable__body">
              {allCountries.map((country) => (
                <TableRow key={country.name.common} country={country} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

export default Table
