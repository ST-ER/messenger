import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Messages from './Components/Messages/Messages';
import Profile from './Components/Profile/Profile'




function App() {
  return (
		<BrowserRouter>
			<div className='app'>
				<Navbar />
				<div className='app-content'>
					<Routes>
						<Route path='/profile' element={<Profile />} />
						<Route path='/chats' element={<Messages />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App;
