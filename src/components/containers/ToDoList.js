import React, { Component } from 'react';
import Options from '../Options';
import Aux from '../hoc/Auxiliary';
import Iteams from '../Iteams/Iteams';
// import NewIteam from '../NewIteam';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			iteams: [
				{ task: "Naucit jednu stranicu Kur'ana", finished: false },
				{ task: 'Otic na poso', finished: false },
			],
			numberOfAllTasks: 0,
			theme: 'light',
		};
	}

	finishedItemsCheck() {
		let itemsFromState = [...this.state.iteams];

		for (let i = 0; i < itemsFromState.size; i++) {
			if (itemsFromState[i].finished === false) delete itemsFromState[i];
		}
	}

	render() {
		return (
			<Aux>
				<div className="container--main">
					<header className="container--main__header">
						<h1 className="container--main__header__text">To Do List</h1>
					</header>
					<div className="to-do-list">
						<Iteams
							iteams={this.state.iteams}
							check={this.finishedItemsCheck.bind(this)}
							numberOfAllTasks={this.state.numberOfAllTasks}
						/>
					</div>
				</div>

				{/* <NewIteam /> */}
				<Options />
			</Aux>
		);
	}
}

export default ToDoList;
