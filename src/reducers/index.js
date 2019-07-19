import spaceshipsReducers from './spaceshipsReducers'
import { combineReducers } from 'redux'

export default combineReducers({
  spaceships: spaceshipsReducers
})
