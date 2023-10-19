import React from 'react';
import Chat from './Components/Chat';
import Chats from './Components/Chats';
import s from './Messages.module.css'

const Messages = () => {
    return (
			<div className={`${s.messages} item`}>
				<div>
					<Chats id='1' name='Alex' />
					<Chats id='2' name='Mom' />
				</div>
				<Chat />
			</div>
		) 
};

export default Messages;