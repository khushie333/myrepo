export default function GameOver({ winner, onRestart }) {
	return (
		<div id='game-over'>
			<p>
				<h2>Game Over!</h2>
			</p>
			{winner && <p>{winner} Won!</p>}
			{!winner && <p> it's a draw!</p>}

			<p>
				<button onClick={() => onRestart()}> Restart !</button>
			</p>
		</div>
	)
}
