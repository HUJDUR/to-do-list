import React from 'react';
import Iteam from './Item';

const items = (props) => {
	return props.items.map((el) => {
		return (
			<Iteam
				key={el.id}
				id={el.id}
				task={el.task}
				finished={el.finished}
				check={props.check}
			/>
		);
	});
};

export default items;
