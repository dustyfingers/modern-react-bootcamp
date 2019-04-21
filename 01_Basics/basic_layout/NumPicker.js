function getNum() {
	return Math.floor(Math.random() * 10) + 1;
 }

class NumPicker extends React.Component {
	render() {
		const num = getNum();
		return (
			<div>
				<h1>Your number is...{num}</h1>
				<p>{ num === 7 ? 'Congrats!' : 'Unlucky...' }</p>
				{num === 7 && <img src="https://media3.giphy.com/media/UbD6c9YyD0SPu/giphy.gif?cid=790b76115cbc22dd387a504f32dc7f44" alt="Kip from Napoleon Dynamite yessing."/>}
			</div>
		)
	}
}
