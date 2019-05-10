import React, {Component} from 'react';


class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: 'Whiskey',
			score: 0,
			gameOver: false
		};
	}

	render() {
		return (
			<div>
				<h1>Battleship</h1>
				<p>Current Player: {this.state.player}</p>
				<h1>Score: {this.state.score}</h1>
			</div>
		);
	}
}

export default Game;