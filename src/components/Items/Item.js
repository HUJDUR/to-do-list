import React from 'react';

function Item(props) {
	return (
		<div className="to-do-list__element">
			<h2 className="to-do-list__element__text">{props.task}</h2>

			<button
				className="btn to-do-list__element__checkbox"
				onClick={() => props.finishedHandler(props.id)}
			>
				X
			</button>
		</div>
	);
}

export default Item;
