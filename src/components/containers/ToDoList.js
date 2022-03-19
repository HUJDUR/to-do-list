import React, { Component } from 'react';
import Options from '../options/Options';
import Aux from '../hoc/Auxiliary';
import Items from '../Items/Items';
// import NewIteam from '../NewIteam';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{ id: 0, task: "Naucit jednu stranicu Kur'ana" },
				{ id: 1, task: 'Otic na poso' },
			],
			numberOfAllTasks: 2,
			theme: 'light',
		};
	}

	finishedIteamHandler(id) {
		const itemsFromState = [...this.state.items];

		for (let i = 0; i < itemsFromState.length; i++)
			if (itemsFromState[i].id === id) itemsFromState.splice(i, 1);

		this.setState({ items: itemsFromState });
	}

	newIteamPopup() {}

	render() {
		return (
			<Aux>
				<div className="container--main">
					<header className="container--main__header">
						<h1 className="container--main__header__text">To Do List</h1>
					</header>
					<div className="to-do-list">
						{this.state.items.length > 0 ? (
							<Items
								items={this.state.items}
								check={this.finishedIteamHandler.bind(this)}
							/>
						) : (
							<p className="to-do-list__message">
								There are no new to do list elements!
							</p>
						)}
					</div>
				</div>

				{/* <NewIteam /> */}
				<Options />
			</Aux>
		);
	}
}

export default ToDoList;
