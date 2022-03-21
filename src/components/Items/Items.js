import React from 'react';
import Iteam from './Item';

const Items = (props) => {
	return props.items.map((el) => {
		return (
			<Iteam
				key={el.id}
				id={el.id}
				task={el.task}
				finished={el.finished}
				finishedHandler={props.finishedHandler}
			/>
		);
	});
};

export default Items;
