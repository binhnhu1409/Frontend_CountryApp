// Action types
export const LOAD_COUNTRIES_REQUEST = 'LOAD_COUNTRIES_REQUEST'
export const LOAD_COUNTRIES_FAILURE = 'LOAD_COUNTRIES_FAILURE'
export const LOAD_COUNTRIES_SUCCESS = 'LOAD_COUNTRIES_SUCCESS'

// Enum?

// A country
export type Country = {
  flags: {
    png: string
  }
  name: {
    common: string
  }
  language: {}
  population: number
  region: string
  isFavorite: boolean
}

export type LoadCountriesRequestAction = {
  type: typeof LOAD_COUNTRIES_REQUEST
}

export type LoadCountriesFailureAction = {
  type: typeof LOAD_COUNTRIES_FAILURE
}

export type LoadCountriesSuccessAction = {
  type: typeof LOAD_COUNTRIES_SUCCESS
  payload: {
    countries: any[]
  }
}

// Use this union in reducer
export type CountryActions =
  | LoadCountriesRequestAction
  | LoadCountriesFailureAction
  | LoadCountriesSuccessAction

export type CountryState = {
  isLoading: boolean
  allCountries: Country[]
  favoriteCountries: Country[]
}

export type AppState = {
  country: CountryState
}

// Using dynamic keys from an enum?
