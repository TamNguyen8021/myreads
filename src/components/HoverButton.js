import { NONE_SHELF } from "constants/constants";
import ShelvesContext from "context/ShelvesContext";
import "css/HoverButton.css";
import { useContext, useState } from "react";

/**
 * @description Represents a hover button to change book's category or add new book
 */
const HoverButton = (props) => {
	const shelves = useContext(ShelvesContext);
	const [isClicked, setIsClicked] = useState(false);
	const bookShelf = props.shelf;

	const handleRenderShelves = () => {
		if (bookShelf === NONE_SHELF) {
			return shelves.filter((shelf) => shelf.id !== NONE_SHELF);
		}

		return shelves;
	};

	/**
	 * @description Handles change event on select
	 * @param {object} event
	 */
	const handleChangeBookShelf = (event) => {
		props?.changeBookShelf(event?.target?.value);
	};

	const handleClickShelfButton = () => {
		setIsClicked(!isClicked);
	};

	return (
		<div
			className="book-shelf-changer"
			onClick={handleClickShelfButton}>
			{
				<select
					defaultValue={bookShelf}
					onChange={handleChangeBookShelf}>
					<option disabled>Move to...</option>
					{handleRenderShelves().map((shelf) => (
						<option
							key={shelf.id}
							value={shelf.id}>
							{shelf.name}
						</option>
					))}
				</select>
			}
		</div>
	);
};

export default HoverButton;
