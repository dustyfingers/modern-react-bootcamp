import React, {Component} from 'react';
import {choice} from './helpers';
import Coin from './Coin';


class CoinContainer extends Component {
	static defaultProps = {
		coins: [
			{ side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
			{ side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
		]
	};
	constructor(props) {
		super(props);
		this.state = {
			currCoin: null,
			nFlips: 0,
			nHeads: 0,
			nTails: 0
		}
		this.handleClick = this.handleClick.bind(this);
	}
	flipCoin() {
		const newCoin = choice(this.props.coins);
		this.setState(st => {
			let newState = {
				...st,
				currCoin: newCoin,
				nFlips: st.nFlips + 1,
				nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
				nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
			}
			return newState;
		});
	}
	handleClick(e) {
		this.flipCoin();
	}
	render() {
		return (
			<div className="CoinContainer">
				<h1>Let's flip a coin!</h1>
				{this.state.currCoin && <Coin info={this.state.currCoin}/>}
				<button onClick={this.handleClick}>Flip Me!</button>
				<p>Out of {this.state.nFlips} flips, {this.state.nHeads} have been heads and {this.state.nTails} have been tails.</p>
			</div>
		)
	}
}

export default CoinContainer;