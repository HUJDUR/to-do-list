import React from 'react';
import Iteam from './Iteam';

const iteams = (props) => {
	return props.iteams.map((el) => {
		return (
			<Iteam
				// key={props.numberOfAllTasks}
				task={el.task}
				finished={el.finished}
				check={props.check}
			/>
		);
	});
};

export default iteams;
