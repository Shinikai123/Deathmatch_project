import { combineReducers } from 'redux'
import games from './games'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  games,
  visibilityFilter
})
