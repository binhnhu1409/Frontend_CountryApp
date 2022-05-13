import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'

import Header from '../../components/Header'
// import OneCountry from '../../components/OneCountry'
// import { Country, AppState } from '../../types'

export default function ACountry() {
  // const { name } = useParams<{ name?: string }>()
  // console.log('name from a country:', name)
  // const allCountries = useSelector(
  //   (state: AppState) => state.country.allCountries
  // )
  // const thisCountry : Country | any = allCountries.find(
  //   country => country.name.common === name
  // )

  return (
    <>
      <Header />
      {/* <OneCountry country={thisCountry}/> */}
    </>
  )
}
