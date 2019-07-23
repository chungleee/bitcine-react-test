import { FETCH_STARSHIPS } from './types'

const fetchStarships = url => {
  return async dispatch => {
    const res = await fetch(url)
    const data = await res.json()

    return dispatch({
      type: FETCH_STARSHIPS,
      payload: data
    })
  }
}

export { fetchStarships }
