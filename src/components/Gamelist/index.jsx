import GamelistItem from './gamelistItem.jsx';
import React from "react";
import s from './style.module.css';

class Gamelist extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id:props.games.length+1,
            name:"",
            map:"",
            org:"",
            amount: "",
        };

    this.handleName = this.handleName.bind(this);
    this.handleMap = this.handleMap.bind(this);
    this.handleOrg = this.handleOrg.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addGame = this.addGame.bind(this);
    }

    addGame = (newGame) => {
        this.setState((state) => ({games: [...state.games, newGame] }));
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

    handleSubmit(event){
        event.preventDefault();
        this.props.addGame(this.state);
        alert("Список игроков обновлен");
    }

    render() {
        return(
            <div className={s.wrapper}>
            <div className={s.gamelist}>
                <div className={s.gamelist_header}>
                    <p className={s.left_corner}>Name</p>
                    <p>Map</p>
                    <p>Organizer</p>
                    <p className={s.right_corner}>Players</p>
                </div>
                {this.props.games.map((game) => (
                    <GamelistItem 
                        key={game.id}
                        game={game}
                        deleteGame={this.props.deletegame}
                        editGame={this.props.editGame}
                    />
                ))}
            <div className={s.admin_create_game}>
                <form onSubmit={this.handleSubmit}>

                <input
                type="text"
                className={s.admin_form_input}
                onChange={this.handleName}
                value={this.state.name} />

                <input
                type="text"
                className={s.admin_form_input}
                onChange={this.handleMap}
                value={this.state.name} />

                <input
                type="text"
                className={s.admin_form_input}
                onChange={this.handleOrg}
                value={this.state.org} />
            
                <input
                type="text"
                className={s.admin_form_input}
                onChange={this.handleAmount}
                value={this.state.amount} />
                <button className={s.game_button} onClick={this.addGame}>Создать игру</button>
                </form>
                
            </div>
            </div>
        </div>            

        )
    }
};

export default Gamelist;


