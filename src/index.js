import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';





let list = [
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

];

ReactDOM.render(
<React.StrictMode>
	<App list={list}/>
</React.StrictMode>,
document.getElementById('root')
);