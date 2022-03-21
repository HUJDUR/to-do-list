import React from 'react';

const Options = (props) => {
	return (
		<footer
			className={`container--options ${props.popupState ? 'blur' : null}`}
		>
			<div className="options--main">
				<button
					className="btn btn--new-item popup"
					onClick={props.popupHandler}
				>
					New to-do item
					<img src="img/icons/plus1.svg" alt="Plus icon" className="icon" />
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
	);
};

export default Options;
