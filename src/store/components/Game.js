import React from 'react'
import PropTypes from 'prop-types'

const Game = ({ game_name, game_map, org_nickname, player_amount }) => (
  <li

  >
    {game_name}, {game_map}, {org_nickname}, {player_amount}
  </li>
)

Game.propTypes = {
  game_name: PropTypes.string.isRequired, 
  game_map: PropTypes.string.isRequired ,
  org_nickname: PropTypes.string.isRequired ,
  player_amount: PropTypes.string.isRequired,
}

export default Game
