import React, { useState } from 'react';
import Chat from './Components/Chat';
import Chats from './Components/Chats';
import Title from './Components/Title';
import Search from './Components/Search'

import s from './Messages.module.css'

const Messages = () => {
	let [chats, useChats] = useState([
		{ id: 1, name: 'Alex' },
		{ id: 2, name: 'Boris' },
		{ id: 3, name: 'Viktor' },
	])
	// let chats = [
	// 	{ id: 1, name: 'Alex' },
	// 	{ id: 2, name: 'Boris' },
	// 	{ id: 3, name: 'Viktor' },
	// ]
	let chatsElement = chats.map(({id,name}) => (
		<Chats id={id} name={name}/>
	))
    return (
			<div className={s.messages}>
				<div className={s.chatsblock}>
					<Title />
					<Search />
					<div className={s.chats}>
						{chatsElement}
					</div>
				</div>

				<div className={s.chatblock}>
					<Chat />
				</div>
			</div>
		) 
};

export default Messages;