const newIteam = () => {
	return (
		<div className="new-to-do-popup">
			<button className="btn new-to-do-popup__exit popup">
				<img src="/img/icons/x.svg" alt="Exit icon" className="icon" />
			</button>

			<form className="new-to-do-popup__form">
				<label for="new-list-element" className="new-to-do-popup__label">
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
		</div>
	);
};

export default newIteam;
