import React, { Component } from 'react';
import Options from '../Options';
import Aux from '../hoc/Auxiliary';
import Items from '../Items/Items';
// import NewIteam from '../NewIteam';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{ id: 1, task: "Naucit jednu stranicu Kur'ana", finished: false },
				{ id: 2, task: 'Otic na poso', finished: false },
			],
			numberOfAllTasks: 2,
			theme: 'light',
		};
	}

	changeFinishedStatus(id) {
		const itemsFromState = [...this.state.items];

		for (let i = 0; i < itemsFromState.length; i++)
			if (itemsFromState[i].id === id) itemsFromState[i].finished = true;

		this.setState({ items: itemsFromState });
	}

	finishedItemsCheck() {
		let itemsFromState = [...this.state.items];

		for (let i = 0; i < itemsFromState.length; i++) {
			if (!itemsFromState[i].finished) {
				itemsFromState.splice(i - 1, 1);
				console.log('yolo');
			}
		}

		this.setState({ items: itemsFromState });
	}

	render() {
		return (
			<Aux>
				<div className="container--main">
					<header className="container--main__header">
						<h1 className="container--main__header__text">To Do List</h1>
					</header>
					<div className="to-do-list">
						<Items
							items={this.state.items}
							check={this.changeFinishedStatus.bind(this)}
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
