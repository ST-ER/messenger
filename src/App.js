import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Chats from "./Components/Chats";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className='app'>
        <Navbar />
        <Chats />
        <Chat />
    </div>
  );
}

export default App;
