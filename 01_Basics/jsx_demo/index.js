function getMood() {
	const moods = ['Angry', 'Sad', 'Happy', 'Dejected'];
	return moods[Math.floor(Math.random() * moods.length)];
}


class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>My number is: {Math.floor((Math.random()) * 6) + 1}</h1>
				<h1>My mood is: {getMood()}</h1>
				<img src="https://images.unsplash.com/photo-1550606873-e09a0d1a5a93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Image of a cat."/>
			</div>
		)
	}
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));