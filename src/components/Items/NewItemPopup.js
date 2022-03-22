import { useSpring, animated } from 'react-spring';

const NewIteam = (props) => {
	const animatedStyle = useSpring({
		from: { opacity: !props.popupState ? 1 : 0 },
		to: { opacity: props.popupState ? 1 : 0 },
	});
	return (
		<animated.div className="new-to-do-popup" style={animatedStyle}>
			<button className="btn new-to-do-popup__exit popup">
				<img
					src="/img/icons/x.svg"
					alt="Exit icon"
					className="icon--exit"
					onClick={props.exitHandler}
				/>
			</button>

			<form className="new-to-do-popup__form">
				<label htmlFor="new-list-element" className="new-to-do-popup__label">
					New To Do List Element
				</label>
				<input
					type="text"
					className="new-to-do-popup__input"
					name="new-list-element"
				/>
			</form>
			<button className="btn btn--add-element">
				Add element
				<img
					src="img/icons/plus2.svg"
					alt="Plus icon"
					className="icon icon--add-element"
				/>
			</button>
		</animated.div>
	);
};

export default NewIteam;
