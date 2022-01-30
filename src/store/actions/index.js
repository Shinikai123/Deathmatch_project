let nextGameId = 0
export const addGame = (game_name, game_map, org_nickanme, player_amount) => ({
  type: 'ADD_GAME',
  id: nextGameId++,
  game_name,
  game_map,
  org_nickanme,
  player_amount
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleGame = id => ({
  type: 'TOGGLE_GAME',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',

}
