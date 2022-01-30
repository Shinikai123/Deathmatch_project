import React from 'react'
import PropTypes from 'prop-types'
import Game from './Game'

const List = ({ games, toggleGame }) => (
  <ul>
    {games.map(game =>
      <Game
        key={game.id}
        {...game}
        onClick={() => toggleGame(game.id)}
      />
    )}
  </ul>
)

List.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    game_name: PropTypes.string.isRequired,
    game_map: PropTypes.string.isRequired,
    org_nickname: PropTypes.string.isRequired,
    player_amount: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  toggleGame: PropTypes.func.isRequired
}

export default List;
