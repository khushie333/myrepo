import { useState } from 'react'

export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [playerName, setPlayerName] = useState(initialName)
	const [isEditing, setIsEditing] = useState(false)
	function handleEditClick() {
		setIsEditing((editing) => !editing)
		if (isEditing) {
			onChangeName(symbol, playerName)
		}
	}
	// function handleChange(event) {
	// 	console.log(event)
	// 	setPlayerName(event.target.Value)
	// }
	let editablePlayerName = <span className='player-name'>{playerName}</span>
	//   let btnCaption='Edit'
	if (isEditing) {
		editablePlayerName = (
			<input
				type='text'
				required
				value={playerName}
				onChange={(e) => setPlayerName(e.target.value)}
			/>
		)
		//  btnCaption='save'
	}
	return (
		<li className={isActive ? 'active' : undefined}>
			<span className='player'>
				{/* <span className='player-name'>{name}</span> */}
				{editablePlayerName}
				<span className='player-symbol'>{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? 'save' : 'Edit'}</button>
		</li>
	)
}
