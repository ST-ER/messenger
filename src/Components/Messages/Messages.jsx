import React, { useState } from 'react';
import Chat from './Components/Chat';
import Chats from './Components/Chats';
import Title from './Components/Title';
import Search from './Components/Search';
import MessageTitle from './Components/MessageTitle';
import s from './Messages.module.css'

const Messages = () => {
	const [chats, useChats] = useState([
		{ id: 1, name: 'Alex' },
		{ id: 2, name: 'Boris' },
		{ id: 3, name: 'Viktor' },
	])
	const [chat, useChat] = useState([
		{ id: 1, fromWhom: 'him', message: 'привет' },
		{ id: 2, fromWhom: 'me', message: 'привет!' },
	])

	const [search, setSearch] = useState('')
 
	const filterChats = chats.filter(chat => {
		return chat.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
	})

	// let chatsElement = chats.map(({id,name}) => (
	let chatsElement = filterChats.map(({ id, name }) => (
		<Chats id={id} name={name} key={id}/>
	))

	let chatElement = chat.map(({ id, message }) => (
		<Chat message={message} key={id} />
	))

    return (
			<div className={s.messages}>
				<div className={s.chatsblock}>
					<Title useChats={useChats} chats={chats} />
					<Search setSearch={setSearch} />
					<div className={s.chats}>{chatsElement}</div>
				</div>

				<div className={s.chatblock}>
					<MessageTitle />
					{/* <Chat chat={chat} useChat={useChat} /> */}
					<div className={s.chat}>{chatElement}</div>
				</div>
			</div>
		) 
};

export default Messages;