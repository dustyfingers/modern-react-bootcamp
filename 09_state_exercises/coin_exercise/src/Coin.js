import React, {Component} from 'react';
import './Coin.css';
import { directive } from '@babel/types';

class Coin extends Component {
	render() {
		return (
			<div className="Coin">
				<img src={this.props.info.imgSrc} alt={this.props.info.sides}/>
			</div>
		)
	}
}

export default Coin;