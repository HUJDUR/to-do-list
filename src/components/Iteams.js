import React from 'react';
import Iteam from './ToDoIteam';

const iteams = (props) => {
	return props.iteams.map((el) => {
		return <Iteam task={el.task} finished={el.finished} />;
	});
};

export default iteams;
