import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Messages.module.css'


const Chats = ({id,name}) => {
    return (
        <div className={s.item}>
            <NavLink to= {'/chats/'+id}>{name}</NavLink>
        </div>
    );
};

export default Chats;