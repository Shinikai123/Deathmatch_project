import { connect } from 'react-redux'
import { toggleGame } from '../actions'
import GameList from '../components/GameList'
import { VisibilityFilters } from '../actions'

const getVisibleGames = (games) => {
  if (VisibilityFilters.SHOW_ALL) {
      return games
  }
}

const mapStateToProps = state => ({
  games: getVisibleGames(state.games, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleGame: id => dispatch(toggleGame(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList)
