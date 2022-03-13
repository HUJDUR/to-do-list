const newIteam = () => {
	return (
		<div class="new-to-do-popup">
			<button class="btn new-to-do-popup__exit popup">
				<img src="/img/icons/x.svg" alt="Exit icon" class="icon" />
			</button>

			<form class="new-to-do-popup__form">
				<label for="new-list-element" class="new-to-do-popup__label">
					New To Do List Element
				</label>
				<input
					type="text"
					class="new-to-do-popup__input"
					name="new-list-element"
				/>
			</form>
			<button class="btn btn--add-element">
				Add element
				<img
					src="img/icons/plus2.svg"
					alt="Plus icon"
					class="icon icon--add-element"
				/>
			</button>
		</div>
	);
};

export default newIteam;
