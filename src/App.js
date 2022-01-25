import React from 'react';
import {initializeApp} from 'firebase/app';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Reg from './components/Reg';
import Reset from './components/Reset';
import Gamelist from './components/Gamelist';
import Footer from './components/Footer';
import Home from './components/Home';
import Organizer from './components/Organizer';
import Profile from './components/Profile';
import Settings from './components/Settings';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import './App.css';

class App extends React.Component {

constructor(props){
super(props);
this.addGame = this.addGame.bind(this);
}
state ={
games: [
		{
			id:1,
			game_name: "game_name 1",
			game_map: "map 1",
			org_nickanme: "observer 1",
			rank_req: "novice",
			player_amount: 8,
		},
		
		{
			id:2,
			game_name: "game_name 2",
			game_map: "map 2",
			org_nickanme: "observer 2",
			rank_req: "expert",
			player_amount: 8,
		},
		
		{
			id:3,
			game_name: "game_name 3",
			game_map: "map 3",
			org_nickanme: "observer 3",
			rank_req: "master",
			player_amount: 8,
		},
		
	],
users: [
	{
		name: "",
		email: "",
		rassword: "",
		role: "",
	},
	{
		name: "",
		email: "",
		rassword: "",
		role: "",
	},
	{
		name: "",
		email: "",
		rassword: "",
		role: "",
	},
	{
		name: "",
		email: "",
		rassword: "",
		role: "",
	},
],
currentUser: {},
};

addGame = (newGame) => {
	this.setState((state) => ({games: [...state.games, newGame] }));
};
deleteGame = (gameId) => {
	const reducedGameList = this.state.games.filter(
		(value) => value.id !== gameId
	);
	this.setState({games: reducedGameList });
};

editGame =(game, gameOld) => {
	const editedGameList = [...this.state.games];
	const index = editedGameList.indexOf(gameOld);
	editedGameList[index] = game;
	this.setState({games: editedGameList});
};

deleteUser = (userEmail) => {
    const reducedUserList = this.state.userList.filter(
      (value) => value.email !== userEmail
    );
    this.setState({ userList: reducedUserList });
  };

  addUser = (newUser) => {
    this.setState((state) => ({ userList: [...state.userList, newUser] }));
  };

  editUser = (user, userOld) => {
    const editedUserList = [...this.state.userList];
    const index = editedUserList.indexOf(userOld);
    editedUserList[index] = user;
    this.setState({ userList: editedUserList });
  };
  setCurrentUser=(user)=>{
    this.setState({currentUser:user});
  }

  isLogin=()=>{
    if(Object.keys(this.state.currentUser).length === 0)return false;
    else return true;
  }



	
render() {
	return (
<Router >
<Header />
<Routes>
	<Route path="/" 
		element={
		<Login
			users={this.state.users}
			currentUser={this.state.currentUser}
			setCurrentUser={this.setCurrentUser}/>}>
	</Route>

	<Route path="/reg"
		element={
		<Reg
			users={this.state.users}
			addUser={this.addUser}/>}>
	</Route>

	<Route path="/reset"
		element={
		<Reset
			currentUser={this.state.currentUser}
		/>}>

	</Route>

	<Route path="/home"
		element={
		<Home/>}>

	</Route>

	<Route path="/dashboard"
		element={
		<Dashboard/>}>

	</Route>
	
	<Route path="/gamelist"
		element={
		<Gamelist
			games={this.state.games}
			addGame={this.addGame}
			deleteGame={this.deleteGame}
			editGame={this.editGame}/>}>
	</Route>

	<Route path="/profile"
		element={
		<Profile
			currentUser={this.state.currentUser}
			editUser={this.editUser}/>}>
	</Route>

	<Route path="/settings"
		element={
		<Settings/>}>

	</Route>
</Routes>
<Footer />
</Router >
		);	
	}
}
export default App;