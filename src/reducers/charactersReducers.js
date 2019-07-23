import { FETCH_CHAR_NAMES } from '../actions/types'

const initialState = {
  charNames: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR_NAMES:
      return {
        ...state,
        charNames: action.payload.results
      }
    default:
      return state
  }
}
