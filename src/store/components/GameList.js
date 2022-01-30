import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import AddGame from '../containers/AddGame'
import VisibleGameList from '../containers/VisibleGameList'

const GameList = () => (
  <div>
    <AddGame />
    <VisibleGameList />
    <div>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}/>
  </div>
  </div>
)

export default GameList
