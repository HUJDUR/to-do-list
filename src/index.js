import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/containers/ToDoList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<ToDoList />
	</React.StrictMode>,
	document.getElementById('application')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
