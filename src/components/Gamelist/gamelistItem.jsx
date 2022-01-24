import React from "react";
import Organizer from "../Organizer";
import s from './style.module.css';

class GameListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id:props.game.id,
			name: props.game.name,
			org_name: props.game.org,
			role: {
				admin:{
					rank: props.game.role.admin.rank,
				},
				novice:{
					rank: props.game.role.novice.rank,
				},
				expert:{
					rank: props.game.role.expert.rank,
				},
				master:{
					rank: props.game.role.master.rank,
				},
			},
			players: props.game.players,
		}
		this.handleName = this.handleName.bind(this);
		this.handleMap = this.handleMap.bind(this);
		this.handleOrg = this.handleOrg.bind(this);
		this.handleAdmin = this.handleAdmin.bind(this);
		this.handleNovice = this.handleNovice.bind(this);
		this.handleExpert = this.handleExpert.bind(this);
		this.handleMaster = this.handleMaster.bind(this);
		this.handlePlayers = this.handlePlayers.bind(this);
		this.deleteGame = this.deleteGame.bind(this);
		this.editGame = this.editGame.bind(this);
};

		editGame(event) {
			event.preventDefault();
			this.props.editGame(this.state,this.props.game);
			alert("Изменено");
		  };
		
		  deleteGame(event) {
			event.preventDefault();
			this.props.deleteGame(this.props.game.id);
		  }

		handleName(event){
			this.setState({name: event.target.value});
		}
	
		handleMap(event){
			this.setState({map: event.target.value});
		}
	
		handleOrg(event){
			this.setState({org: event.target.value});
		}
	
		handleAdmin(event){
			this.setState((state) => (state.role.admin.rank = event.target.value ));
		}

		handleNovice(event){
			this.setState((state) => (state.role.novice.rank = event.target.value ));
		}
	
		handleExpert(event){
			this.setState((state) => (state.role.expert.rank = event.target.value ));
		}
	
		handleMaster(event){
			this.setState((state) => (state.role.master.rank = event.target.value ));
		}
	
		handlePlayers(event){
			this.setState({players: event.target.value});
		}
	
	render() {
		return (
			<>
			<form onSubmit={this.editGame} className={s.game}>
				<input type="text"
					className={s.gamestring}
					value={this.state.name}
					onChange={this.handleName}></input>

				<input type="text"
					className={s.gamestring}
					value={this.state.map}
					onChange={this.handleMap} ></input>

				<input type="text"
					className={s.gamestring}
					value={this.state.org}
					onChange={this.handleOrg} ></input>

				<input type="text"
					className={s.gamestring}
					value={this.state.novice}
					onChange={this.handleAdmin} ></input>

				<input type="text"
					className={s.gamestring}
					value={this.state.novice}
					onChange={this.handleNovice} ></input>

				<input type="text"
					className={s.gamestring}
					value={this.state.expert}
					onChange={this.handleExpert} ></input>

				<input type="text"
					className={s.gamestring}
					value={this.state.master}
					onChange={this.handleMaster} ></input>

				<input type="text"
					className={s.gamestring}
					value={this.state.players}
					onChange={this.handlePlayers} ></input>
				<button type="submit">Изменить</button>
				<button onClick={this.deleteGame}>Удалить</button>
				</form>
			</>
		);
	}
}

export default GameListItem;