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

///class App extends React.Component {

///constructor(props){
///super(props);
///initializeApp(config.firebase);
///this.state ={
///users: []
///}
///	
const App = (props) => {
	return (
<Router >
<Header />
<Routes>
	<Route path="/home" element={<Home/>}></Route>
	<Route path="/dashboard" element={<Dashboard/>}></Route>
	<Route path="/" element={<Login/>}></Route>
	<Route path="/reg" element={<Reg/>}></Route>
	<Route path="/reset" element={<Reset/>}></Route>
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