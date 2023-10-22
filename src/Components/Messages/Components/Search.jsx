import React, { useState } from 'react';
import s from '../Messages.module.css'


const Search = () => {
    const [search,useSearch] = useState('');
    const Filter = (e) =>{
        useSearch(e.target.value);
    }
    return (
			<div className={s.input}>
				<input type='text' placeholder='Search' onInput={Filter} />
				<p>{search}</p>
			</div>
		)
};

export default Search;