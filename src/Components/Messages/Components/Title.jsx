import React from 'react';
import s from '../Messages.module.css'

const Title = () => {
    return (
			<div className={s.title}>
				<h3>Chats</h3>
				<button>
					<div>+ Create New Chat</div>
				</button>
			</div>
		)
};

export default Title;