import React, { useState } from 'react';
import s from '../Messages.module.css'


const Search = (props) => {
	return (
		<div className={s.input}>
			<input
				type='text'
				placeholder='Search'
				onChange={event => props.setSearch(event.target.value)}
			/>
		</div>
	)
}

export default Search;