class App extends React.Component {
	render() {
		return (
			<div>
				<Hello 
					to={':eggplant:'} 
					from="Paul" 
					numBangs={4}
				/>
				<Hello 
					to="Sonny" 
					from="Cher" 
					numBangs={10}
					img="https://images.unsplash.com/photo-1479778633766-1272efd64a29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));