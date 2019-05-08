class App extends React.Component {
	render() {
		return (
			<div>
				<Friend 
					name="Elton"
					hobbies={['piano', 'acting', 'math']}
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));