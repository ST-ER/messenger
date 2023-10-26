import React from 'react';
import s from '../Messages.module.css'

const Title = (props) => {
	const newChat = () => {
		let name = prompt('Введите имя')
		props.useChats([
			...props.chats,
			{
				id: Date.now(),
				name: name,
			},
		])
	}

    return (
			<div className={s.title}>
				<h3>Chats</h3>
				<button onClick={newChat}>
					<div>+ Create New Chat</div>
				</button>
			</div>
		)
};

export default Title;