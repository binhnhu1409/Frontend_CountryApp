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
    return {
      ...state,
      isLoading: false,
    }
  }

  default:
    return state
  }
}
