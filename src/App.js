import React, { Component } from 'react';
import Aux from './HOC/Auxiliary';

class App extends Component {
	state = {
		no: 'jes',
	};

	render() {
		return (
			<Aux>
				<div class="container--main">
					<header class="container--main__header">
						<h1 class="container--main__header__text">To Do List</h1>
					</header>
					<main class="to-do-list">There are no to-do items for today</main>
				</div>

				<footer class="container--options">
					<div class="options--main">
						<button class="btn btn--new-item popup">
							New to-do item
							<img src="img/icons/plus1.svg" alt="Plus icon" class="icon" />
						</button>
					</div>
					<div class="options--secondary">
						<button class="btn btn--new-item">
							Options
							<img
								src="img/icons/options.svg"
								alt="Options icon"
								class="icon"
							/>
						</button>
						<button class="btn btn--new-item">
							Change theme
							<img
								src="img/icons/moon.svg"
								alt="Change theme icon"
								class="icon"
							/>
						</button>
					</div>
				</footer>
			</Aux>
		);
	}
}

export default App;
