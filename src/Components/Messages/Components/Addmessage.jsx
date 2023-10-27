import React, { useState } from 'react'

const Addmessage = ({addText}) => {
    const [addMessage, setAddMessage] = useState('');

	const f = () =>{
        addText(addMessage);
        setAddMessage('');
    }
	return (
		<div>
			<input
				type='text'
				placeholder='Введите сообщение...'
				onChange={(e) => {
					setAddMessage(e.target.value)
				}}
			/>
			<button onClick={f}>Отправить</button>
		</div>
	)
}

export default Addmessage
