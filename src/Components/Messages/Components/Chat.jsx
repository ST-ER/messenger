import React from 'react';
import s from '../Messages.module.css'


const Chat = ({ message }) => {
	return <div className={s.item}>{message}</div>
}

export default Chat;