import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Messages.module.css'


const Chats = ({id, name}) => {
    return (
			<div className={s.item}>
				<NavLink
					to={'#'}
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					{name}
				</NavLink>
			</div>
		)
};

export default Chats;