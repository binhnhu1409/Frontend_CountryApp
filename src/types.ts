// Action types
export const LOAD_COUNTRIES_REQUEST = 'LOAD_COUNTRIES_REQUEST'
export const LOAD_COUNTRIES_FAILURE = 'LOAD_COUNTRIES_FAILURE'
export const LOAD_COUNTRIES_SUCCESS = 'LOAD_COUNTRIES_SUCCESS'

export const ADD_FAVORITE_COUNTRY = 'ADD_FAVORITE_COUNTRY'
export const REMOVE_FAVORITE_COUNTRY = 'REMOVE_FAVORITE_COUNTRY'

// Enum?

// A country
export type Country = {
  flags: string
  name: {
    common: string
  }
  languages: {
    [name: string]: string
  }
  population: number
  region: string
  isFavorite: boolean
}

export type CountryProps = {
  country: Country
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

export type AddFavoriteCountryAction = {
  type: typeof ADD_FAVORITE_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveFavoriteCountryAction = {
  type: typeof REMOVE_FAVORITE_COUNTRY
  payload: {
    country: Country
  }
}

// Use this union in reducer
export type CountryActions =
  | LoadCountriesRequestAction
  | LoadCountriesFailureAction
  | LoadCountriesSuccessAction
  | AddFavoriteCountryAction
  | RemoveFavoriteCountryAction

export type CountryState = {
  isLoading: boolean
  allCountries: Country[]
  favoriteCountries: Country[]
}

export type AppState = {
  country: CountryState
}

// Using dynamic keys from an enum?
