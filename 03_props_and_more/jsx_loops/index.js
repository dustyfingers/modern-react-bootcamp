class App extends React.Component {
	render() {
		return (
			<div>
				<Friend 
					name="Elton"
					hobbies={['piano', 'acting', 'math', 'learning', 'singing']}
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));