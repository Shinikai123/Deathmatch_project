import React from "react";
import s from './style.module.css';

class GameListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id:props.game.id,
			name: props.game.name,
			org_name: props.game.org,
			players: props.game.players,
		}
		this.handleName = this.handleName.bind(this);
    	this.handleMap = this.handleMap.bind(this);
    	this.handleOrg = this.handleOrg.bind(this);;
    	this.handleAmount = this.handleAmount.bind(this);
		this.deleteGame = this.deleteGame.bind(this);
		this.editGame = this.editGame.bind(this);
}


		editGame(event) {
			event.preventDefault();
			this.props.editGame(this.state,this.props.game);
			alert("Изменено");
		  };
		
		  deleteGame(event) {
			event.preventDefault();
			this.props.deleteGame(this.props.game.id);
		  };
	  
		  handleName(event){
			  this.setState({name: event.target.value});
		  }
	  
		  handleMap(event){
			  this.setState({map: event.target.value});
		  }
	  
		  handleOrg(event){
			  this.setState({org: event.target.value});
		  }

		  handleAmount(event){
			  this.setState({amount: event.target.value});
		  }
	  
	
	render() {
		return (
			<>
			<form onSubmit={this.editGame} className={s.game}>
				<input type="text"
					className={s.game_string}
					value={this.state.name}
					onChange={this.handleName}></input>

				<input type="text"
					className={s.game_string}
					value={this.state.map}
					onChange={this.handleMap} ></input>

				<input type="text"
					className={s.game_string}
					value={this.state.org}
					onChange={this.handleOrg} ></input>

				<input type="text"
					className={s.game_string}
					value={this.state.amount}
					onChange={this.handleAmount} ></input>
				<button className={s.game_button} type="submit">Изменить</button>
				<button className={s.game_button} onClick={this.deleteGame}>Удалить</button>
				</form>
			</>
		);
	}
}

export default GameListItem;