import React from 'react';

function item(props) {
	return (
		<div className="to-do-list__element">
			<h2 className="to-do-list__element__text">{props.task}</h2>

			<button
				className="btn to-do-list__element__checkbox"
				onClick={() => props.check(props.id)}
			>
				X
			</button>

			{/* <div className="to-do-list__element__checkbox" data-listnumber="0">
				<div className="to-do-list__element__checkbox__under"></div>
			</div> */}
		</div>
	);
}

export default item;
