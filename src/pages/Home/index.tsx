import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../types'
import { fetchCountries } from '../../redux/actions'

// import Header from '../../components/Header'
// import ThemeSidebar from '../../components/ThemeSidebar'
import Table from '../../components/Table'

export default function Home() {
  const dispatch = useDispatch()
  const allCountries = useSelector(
    (state: AppState) => state.country.allCountries
  )

  if (allCountries.length === 0) {
    dispatch(fetchCountries())
    return <p>Loading...</p>
  }

  return (
    <>
      <Table />
    </>
  )
}
