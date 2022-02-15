import React from 'react';

function iteam(props) {
	return (
		<div className="to-do-list__element">
			<h2 className="to-do-list__element__text">{props.task}</h2>
			<div className="to-do-list__element__checkbox" data-listnumber="0">
				<div Name="to-do-list__element__checkbox__under"></div>
			</div>
		</div>
	);
}

export default iteam;
