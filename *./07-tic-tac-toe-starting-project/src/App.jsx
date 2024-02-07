import Player from './comp/Player.jsx'
import GameBoard from './comp/GameBoard.jsx'
import { useState } from 'react'
import Log from './comp/Log.jsx'
import { WINNING_COMBINATIONS } from './winning-combinations.js'
import GameOver from './comp/GameOver.jsx'

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
]

function deriveActivePlayer(gameTurns) {
	let currPlayer = 'X'
	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currPlayer = 'O'
	}
	return currPlayer
}

let gameBoard = [...initialGameBoard.map((array) => [...array])]

let winner = null

function App() {
	const [players, setPlayers] = useState({
		X: 'Player 1',
		O: 'Player 2',
	})

	const [gameTurns, setGameTurns] = useState([])
	const activePlayer = deriveActivePlayer(gameTurns)

	let gameBoard = [...initialGameBoard.map((array) => [...array])]

	for (const turn of gameTurns) {
		const { square, player } = turn
		const { row, col } = square

		gameBoard[row][col] = player
	}

	for (const combinations of WINNING_COMBINATIONS) {
		const firstss = gameBoard[combinations[0].row][combinations[0].column]
		const secondss = gameBoard[combinations[1].row][combinations[1].column]
		const thirdss = gameBoard[combinations[2].row][combinations[2].column]
		if (firstss && firstss === secondss && firstss === thirdss) {
			winner = players[firstss]
		}
	}

	const hasDraw = gameTurns.length === 9 && !winner

	function handleSelectSquare(rowIndex, colIndex) {
		setGameTurns((prevTurns) => {
			const currPlayer = deriveActivePlayer(prevTurns)

			const updatedTurns = [
				{ square: { row: rowIndex, col: colIndex }, player: currPlayer },
				...prevTurns,
			]

			return updatedTurns
		})
	}

	function handleRestart() {
		setGameTurns([])
	}

	function handlePlayerNameChange(symbol, newname) {
		setPlayers((prevPlayer) => {
			return {
				...prevPlayer,
				[symbol]: newname,
			}
		})
	}

	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player
						initialName='Player 1'
						symbol='X'
						isActive={activePlayer === 'X'}
						onChangeName={handlePlayerNameChange}
					/>
					<Player
						initialName='Player 2'
						symbol='O'
						isActive={activePlayer === 'O'}
						onChangeName={handlePlayerNameChange}
					/>
				</ol>

				{(winner || hasDraw) && (
					<GameOver winner={winner} onRestart={handleRestart} />
				)}
				<GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
			</div>
			<Log turns={gameTurns} />
		</main>
	)
}

export default App
