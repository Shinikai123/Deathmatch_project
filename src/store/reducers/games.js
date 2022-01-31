const games = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GAME':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_GAME':
      return state.map(game =>
        (game.id === action.id)
          ? {...game, completed: !game.completed}
          : game
      )
    default:
      return state
  }
}

export default games
