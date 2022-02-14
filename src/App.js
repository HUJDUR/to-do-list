import React, { Component } from 'react';
import Aux from './HOC/Auxiliary';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			iteams: [1, 2, 3],
		};
	}

	render() {
		return (
			<Aux>
				<div className="container--main">
					<header className="container--main__header">
						<h1 className="container--main__header__text">To Do List</h1>
					</header>
					{this.state.iteams.length ? (
						this.state.iteams.map((el) => {
							return (
								<div className="to-do-list__element">
									<h2 className="to-do-list__element__text">Placeholder</h2>
									<div
										className="to-do-list__element__checkbox"
										data-listnumber="0"
									>
										<div Name="to-do-list__element__checkbox__under"></div>
									</div>
								</div>
							);
						})
					) : (
						<main className="to-do-list">
							There are no to-do items for today
						</main>
					)}
				</div>

				<footer className="container--options">
					<div className="options--main">
						<button className="btn btn--new-item popup">
							New to-do item
							<img src="img/icons/plus1.svg" alt="Plus icon" class="icon" />
						</button>
					</div>
					<div className="options--secondary">
						<button className="btn btn--new-item">
							Options
							<img
								src="img/icons/options.svg"
								alt="Options icon"
								className="icon"
							/>
						</button>
						<button className="btn btn--new-item">
							Change theme
							<img
								src="img/icons/moon.svg"
								alt="Change theme icon"
								className="icon"
							/>
						</button>
					</div>
				</footer>
			</Aux>
		);
	}
}

export default App;
