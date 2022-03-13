import React, { Component } from 'react';
import Options from '../Options';
import Aux from '../hoc/Auxiliary';
import Iteams from '../Iteams/Iteams';
// import NewIteam from '../NewIteam';

class ToDoList extends Component {
	state = {
		iteams: [
			{ task: "Naucit jednu stranicu Kur'ana", finished: false },
			{ task: 'Otic na poso', finished: false },
		],
		numberOfAllTasks: 2,
		theme: 'light',
	};

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

				{/* <NewIteam /> */}
				<Options />
			</Aux>
		);
	}
}

export default ToDoList;
