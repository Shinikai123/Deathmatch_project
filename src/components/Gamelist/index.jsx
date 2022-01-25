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
            role:{
                admin:{
                    rank: "",
                },
                novice:{
                    rank:"",
                },
                expert:{
                    rank:"",
                },
                master:{
                    rank:"",
                },
            },
            players:"",
        };

    this.handleName = this.handleName.bind(this);
    this.handleMap = this.handleMap.bind(this);
    this.handleOrg = this.handleOrg.bind(this);
    this.handleAdmin = this.handleAdmin.bind(this);
    this.handleNovice = this.handleNovice.bind(this);
    this.handleExpert = this.handleExpert.bind(this);
    this.handleMaster = this.handleMaster.bind(this);
    this.handlePlayers = this.handlePlayers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState((state) => (state.role.rank.organizer = event.target.value ));
    }

    handleNovice(event){
        this.setState((state) => (state.rank.novice = event.target.value ));
    }

    handleExpert(event){
        this.setState((state) => (state.rank.expert = event.target.value ));
    }

    handleMaster(event){
        this.setState((state) => (state.rank.master = event.target.value ));
    }

    handlePlayers(event){
        this.setState({players: event.target.value});
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
                    <p>Name</p>
                    <p>Map</p>
                    <p>Organizer</p>
                    <p>Rank</p>
                    <p>Players</p>
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
                    <label>
                        название:
                    <input
                type="text"
                className={s.admin_form_input}
                onChange={this.handleName}
                value={this.state.name} />
                </label>
                    <label>
                        карта:   
                    <input
                type="text"
                className={s.admin_form_input}
                onChange={this.handleMap}
                value={this.state.map} />
                </label>
                <label>
                    имя орга:
                <input
                type="text"
                className={s.admin_form_input}
                onChange={this.handleOrg}
                value={this.state.org} />
                </label>
                    <label>
                        новичок:
                    <input
                type="text"
                className={s.admin_form_input}
                onChange={this.handleNovice}
                value={this.state.novice} />
                </label>
                <label>
                        эксперт:
                    <input
                type="text"
                className={s.admin_form_input}
                onChange={this.handleExpert}
                value={this.state.expert} />
                </label>
                    <label>
                        мастер:
                    <input
                type="text"
                className={s.admin_form_input}
                onChange={this.handleMaster}
                value={this.state.master} />
                </label>
                    <label>
                        кол-во игроков:
                    <input
                type="text"
                className={s.admin_form_input}
                onChange={this.handlePlayers}
                value={this.state.players} />
                </label>
                </form>
            </div>
            </div>
        </div>            

        )
    }
};

export default Gamelist;


