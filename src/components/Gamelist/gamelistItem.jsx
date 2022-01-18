import React from "react";
import s from './style.module.css';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
		let link = `${props.id}`;
	}
	render() {
		return (
			<div className={s.game}>
				<div className = {s.gamestring}>{this.props.game_name}</div>
				<div className = {s.gamestring}>{this.props.game_map}</div>
				<div className = {s.gamestring}>{this.props.org_nickname}</div>
				<div className = {s.gamestring}>{this.props.rank_req}</div>
				<div className = {s.gamestring}>{this.props.player_amount}</div>
			</div>
		);
	}
}

export default Game;