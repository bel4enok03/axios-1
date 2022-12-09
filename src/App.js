import { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
	state = {
		users: [],
	};

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
			const users = res.data;
			this.setState({ users });
			console.log(users);
		});
	}

	render() {
		return (
			<div>
				{this.state.users.map((user) => (
					<p key={user.id}>
						{user.name}
						<span className='email'> {user.email} </span>
						<span className='city'> {user.address.city} </span>
						<span className='street'> {user.address.street} </span>
						<span className='web'> {user.website} </span>
					</p>
				))}
			</div>
		);
	}
}
export default App;
