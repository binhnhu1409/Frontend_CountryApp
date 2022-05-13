import {
  LOAD_COUNTRIES_REQUEST,
  LOAD_COUNTRIES_FAILURE,
  LOAD_COUNTRIES_SUCCESS,
  CountryActions,
  CountryState,
  ADD_FAVORITE_COUNTRY,
  REMOVE_FAVORITE_COUNTRY,
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

  case ADD_FAVORITE_COUNTRY: {
    const { country } = action.payload
    if (
      state.favoriteCountries.find(
        (thisCountry) => thisCountry.name === country.name
      )
    ) {
      return state
    }
    country.isFavorite = !country.isFavorite
    return {
      ...state,
      favoriteCountries: [...state.favoriteCountries, country],
    }
  }

  case REMOVE_FAVORITE_COUNTRY: {
    const { country } = action.payload
    const index = state.favoriteCountries.findIndex(
      (thisCountry) => thisCountry.name === country.name
    )
    if (index >= 0) {
      state.favoriteCountries.splice(index, 1)
      country.isFavorite = !country.isFavorite
      return {
        ...state,
        favoriteCountries: [...state.favoriteCountries],
      }
    }
    return state
  }

  default:
    return state
  }
}
