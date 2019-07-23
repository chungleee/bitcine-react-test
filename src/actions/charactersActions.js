import { FETCH_CHAR_NAMES } from './types'

const fetchCharNames = () => {
  const url = 'https://swapi.co/api/people/'
  return async dispatch => {
    const res = await fetch(url)
    const data = await res.json()

    return dispatch({
      type: FETCH_CHAR_NAMES,
      payload: data
    })
  }
}

export { fetchCharNames }
