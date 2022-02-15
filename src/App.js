import React, { Component } from 'react';
import Options from './components/Options';
import Aux from './hoc/Auxiliary';
import Iteams from './components/Iteams';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			iteams: [
				{ task: "Naucit jednu stranicu Kur'ana", finished: false },
				{ task: 'Otic na poso', finished: false },
			],
		};
	}

	render() {
		return (
			<Aux>
				<div className="container--main">
					<header className="container--main__header">
						<h1 className="container--main__header__text">To Do List</h1>
					</header>
					<div className="to-do-list">
						<Iteams iteams={this.state.iteams} />
					</div>
				</div>

				<Options />
			</Aux>
		);
	}
}

export default App;
