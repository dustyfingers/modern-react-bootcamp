class App extends React.Component {
	render() {
		return (
			<div>
				<Friend 
					name="Elton"
					hobbies={['piano', 'acting', 'singing']}
				/>
				<Friend 
					name="Louie"
					hobbies={['production', 'web development', 'math', 'learning']}
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));