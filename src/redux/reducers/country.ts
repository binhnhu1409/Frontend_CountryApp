import {
  LOAD_COUNTRIES_REQUEST,
  LOAD_COUNTRIES_FAILURE,
  LOAD_COUNTRIES_SUCCESS,
  CountryActions,
  CountryState,
} from '../../types'

export default function country(
  state: CountryState = {
    isLoading: false,
    allCountries: [],
    favoriteCountries: [],
  },
  action: CountryActions
): CountryState {
  console.log('action', action)
  console.log('state from country of reducers', state)
  switch (action.type) {
  case LOAD_COUNTRIES_REQUEST: {
    return {
      ...state,
      isLoading: true,
    }
  }

  case LOAD_COUNTRIES_FAILURE: {
    return {
      ...state,
      isLoading: false,
    }
  }

  case LOAD_COUNTRIES_SUCCESS: {
    console.log('ACTION FROM SUCCESS REDUCER', action)
    const allCountries = action.payload.countries.map((country) => ({
      flags: country.flags.png,
      name: country.name.common,
      languages: country.languages,
      population: country.population,
      region: country.region,
      isFavorite: false,
    }))
    console.log('from countries success,', allCountries)
    return {
      ...state,
      isLoading: false,
      allCountries: allCountries,
    }
  }

  default:
    return state
  }
}
