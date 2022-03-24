import React, { Component } from 'react';
import Options from '../options/Options';
import Aux from '../hoc/Auxiliary';
import Items from '../Items/Items';
import NewIteam from '../Items/NewItemPopup';

class ToDoList extends Component {
	state = {
		items: [
			{ id: 0, task: "Naucit jednu stranicu Kur'ana" },
			{ id: 1, task: 'Otic na poso' },
		],
		numberOfAllTasks: 2,
		theme: 'light',
		popup: false,
	};

	// Handlers
	finishedIteamHandler(id) {
		const itemsFromState = [...this.state.items];

		for (let i = 0; i < itemsFromState.length; i++)
			if (itemsFromState[i].id === id) itemsFromState.splice(i, 1);

		this.setState({ items: itemsFromState });
	}

	newIteamPopup() {
		let popupFromState = !this.state.popup;

		this.setState({ popup: popupFromState });
	}

	newIteamUpdate(textValue) {
		const oldStateItems = [...this.state.items];
		const newToDoItem = { id: this.numberOfAllTasks, task: textValue };
		const newStateItems = oldStateItems.push(newToDoItem);

		this.setState({ items: newStateItems });
		this.numberOfAllTasks++;
		this.newIteamPopup();
	}

	render() {
		// Variables used in the return of the redner method

		const items =
			this.state.items.length > 0 ? (
				<Items
					items={this.state.items}
					finishedHandler={this.finishedIteamHandler.bind(this)}
				/>
			) : (
				<p className="to-do-list__message">
					There are no new to do list elements!
				</p>
			);

		// Return

		return (
			<Aux>
				<div className={`container--main ${this.state.popup ? 'blur' : null}`}>
					<header className="container--main__header">
						<h1 className="container--main__header__text">To Do List</h1>
					</header>
					<div className="to-do-list">{items}</div>
				</div>
				<NewIteam
					exitHandler={this.newIteamPopup.bind(this)}
					popupState={this.state.popup}
					newItemHandler={this.newIteamUpdate.bind(this)}
				/>
				<Options
					popupHandler={this.newIteamPopup.bind(this)}
					popupState={this.state.popup}
				/>
			</Aux>
		);
	}
}

export default ToDoList;
