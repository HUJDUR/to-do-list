import React, { Component } from 'react';
import Options from '../options/Options';
import Aux from '../hoc/Auxiliary';
import Items from '../Items/Items';
import NewIteam from '../Items/NewItemPopup';

const applicationElement = document.querySelector('.application');

class ToDoList extends Component {
	state = {
		items: [],
		numberOfAllTasks: 0,
		darkTheme: false,
		popup: false,
	};

	// Handlers

	onSubmit(event) {
		event.preventDefault();
	}

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

	newIteamUpdate(e, textValue) {
		e.preventDefault();

		let numberOfAllTasks = this.state.numberOfAllTasks;
		const newToDoItem = { id: numberOfAllTasks, task: textValue };
		const newStateItems = [...this.state.items, newToDoItem];

		numberOfAllTasks++;

		this.setState({ items: newStateItems, numberOfAllTasks });
		this.newIteamPopup();
	}

	themeHandler() {
		const isDarkModeEnabled = this.state.darkTheme;
		this.setState({ darkTheme: !isDarkModeEnabled });

		applicationElement.classList.toggle('dark');
	}

	render() {
		// Variables used in the return of the render method

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
					onSubmit={this.onSubmit}
				/>
				<Options
					popupHandler={this.newIteamPopup.bind(this)}
					popupState={this.state.popup}
					themeHandler={this.themeHandler.bind(this)}
				/>
			</Aux>
		);
	}
}

export default ToDoList;
