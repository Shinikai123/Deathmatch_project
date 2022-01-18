import React from 'react';
import Header from './components/Header';
import Gamelist from './components/Gamelist';
import Footer from './components/Footer';
import Sign from './components/Sign';
import Home from './components/Home';
import Organizer from './components/Organizer';
import Profile from './components/Profile';
import Settings from './components/Settings';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import './App.css';


  const App = (props) => {
	return (
	<Router >
	<Header />
	<Routes>
		<Route path="/" element={<Home/>}></Route>
		<Route path="/Sign" element={<Sign/>}></Route>
		<Route path="/gamelist" element={<Gamelist arr={props.list}/>}></Route>
		<Route path="/organizer" element={<Organizer/>}></Route>
		<Route path="/profile" element={<Profile/>}></Route>
		<Route path="/settings" element={<Settings/>}></Route>
	</Routes>
	<Footer />
	</Router >
);
	
}
export default App;