import React from 'react'

import { CountryProps } from '../../types'

const OneCountry = ({ country }: CountryProps) => {
  return (
    <section>
      <figure>
        <img alt={`${country.name} flag`} src={country.flags} />
      </figure>
    </section>
  )
}

export default OneCountry
