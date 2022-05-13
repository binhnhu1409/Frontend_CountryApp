import axios from 'axios'
import { Dispatch } from 'redux'

import {
  LOAD_COUNTRIES_REQUEST,
  LOAD_COUNTRIES_FAILURE,
  LOAD_COUNTRIES_SUCCESS,
  ADD_FAVORITE_COUNTRY,
  REMOVE_FAVORITE_COUNTRY,
  CountryActions,
  Country,
} from '../../types'

export function LoadCountriesRequestAction(): CountryActions {
  return {
    type: LOAD_COUNTRIES_REQUEST,
  }
}

export function LoadCountriesFailureAction(): CountryActions {
  return {
    type: LOAD_COUNTRIES_FAILURE,
  }
}

export function LoadCountriesSuccessAction(countries: any[]): CountryActions {
  return {
    type: LOAD_COUNTRIES_SUCCESS,
    payload: {
      countries,
    },
  }
}

export function AddFavoriteCountry(country: Country): CountryActions {
  return {
    type: ADD_FAVORITE_COUNTRY,
    payload: {
      country,
    },
  }
}

export function RemoveFavoriteCountry(country: Country): CountryActions {
  return {
    type: REMOVE_FAVORITE_COUNTRY,
    payload: {
      country,
    },
  }
}

// Async action processed by redux-thunk middleware
// export function fetchProduct(productId: string) {
//   return (dispatch: Dispatch) => {
//     return fetch(`products/${productId}`)
//       .then(resp => resp.json())
//       .then(product => {
//         dispatch(addProduct(product))
//       })
//   }
// }

export function fetchCountries() {
  return async function (dispatch: Dispatch) {
    dispatch(LoadCountriesRequestAction())
    try {
      const res = await axios.get('https://restcountries.com/v3.1/all')
      const countriesData = res.data
      return dispatch(LoadCountriesSuccessAction(countriesData))
    } catch (error) {
      return dispatch(LoadCountriesFailureAction())
    }
  }
}
