class Machine extends React.Component {
    render() {
		const {symbol1, symbol2, symbol3} = this.props;
		const winner = (symbol1 === symbol2) && (symbol2 === symbol3);
		return (
			<div>
				<p>{symbol1} | {symbol2} | {symbol3}</p>
				<p>{winner ? 'Winner!' : 'Loser!'}</p>
			</div>
		)
	}        
}