import React, { Component } from 'react';
import Iteam from './components/ToDoIteam';
import Options from './components/Options';
import Aux from './hoc/Auxiliary';

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
		let items;

		if (this.state.iteams.length) {
			items = this.state.iteams.map((el) => {
				return <Iteam task={el.task} finished={el.finished} />;
			});
		} else {
			<main className="to-do-list">There are no to-do items for today</main>;
		}

		return (
			<Aux>
				<div className="container--main">
					<header className="container--main__header">
						<h1 className="container--main__header__text">To Do List</h1>
					</header>
					{items}
				</div>

				<Options />
			</Aux>
		);
	}
}

export default App;
