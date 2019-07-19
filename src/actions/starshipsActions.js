import { FETCH_STARSHIPS } from './types'

const fetchStarships = () => {
  return async dispatch => {
    const res = await fetch('https://swapi.co/api/starships/')
    const data = await res.json()
    console.log('data from action', data)
    return dispatch({
      type: FETCH_STARSHIPS,
      payload: data
    })
  }
}

export { fetchStarships }
