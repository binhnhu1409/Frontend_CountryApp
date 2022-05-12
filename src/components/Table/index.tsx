import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'
import TableRow from '../TableRow'

const Table = () => {
  const { isLoading, allCountries } = useSelector(
    (state: AppState) => state.country
  )

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className="countriesTable">
          <table>
            <thead className="countriesTable__header">
              <tr>
                <th>Flag</th>
                <th>Name</th>
                {/* <th>Languages</th> */}
                <th>Population</th>
                <th>Region</th>
                <th>Favorite</th>
              </tr>
            </thead>
            <tbody>
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
