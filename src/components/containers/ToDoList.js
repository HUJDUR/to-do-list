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
				{ id: 1, task: "Naucit jednu stranicu Kur'ana", finished: false },
				{ id: 2, task: 'Otic na poso', finished: false },
			],
			numberOfAllTasks: 2,
			theme: 'light',
		};
	}

	changingFinishedStatus(id) {}

	finishedItemsCheck(id) {
		let itemsFromState = [...this.state.iteams];

		for (let i = 0; i < itemsFromState.length; i++) {
			if (!itemsFromState[i].finished) {
				itemsFromState.splice(i - 1, 1);
				console.log('yolo');
			}
		}

		this.setState({ iteams: itemsFromState });
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
