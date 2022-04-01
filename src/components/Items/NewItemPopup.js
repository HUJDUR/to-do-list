import { useTransition, animated } from 'react-spring';
import Aux from '../hoc/Auxiliary';

const NewIteam = (props) => {
	const element = document.querySelector('.new-to-do-popup__input');

	const transition = useTransition(props.popupState, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	return (
		<Aux>
			{transition((style, item) =>
				item ? (
					<animated.div className="new-to-do-popup" style={style}>
						<button className="btn new-to-do-popup__exit popup">
							<img
								src="/img/icons/x.svg"
								alt="Exit icon"
								className="icon--exit"
								onClick={props.exitHandler}
							/>
						</button>

						<form
							className="new-to-do-popup__form"
							onSubmit={(e) => props.newItemHandler(e, element.value)}
						>
							<label
								htmlFor="new-list-element"
								className="new-to-do-popup__label"
							>
								New To Do List Element
							</label>
							<input
								type="text"
								className="new-to-do-popup__input"
								name="new-list-element"
								autoFocus
							/>
							<button
								type="submit"
								className="btn btn--add-element"
								// onClick={}
							>
								Add element!
							</button>
						</form>
					</animated.div>
				) : null
			)}
		</Aux>
	);
};

export default NewIteam;
