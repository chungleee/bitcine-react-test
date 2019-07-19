import { FETCH_STARSHIPS } from '../actions/types'

const initialState = {
  starships: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARSHIPS:
      return {
        ...state,
        starships: action.payload
      }
    default:
      return state
  }
}
