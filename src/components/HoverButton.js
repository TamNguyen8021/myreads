import ShelvesContext from "context/ShelvesContext";
import "css/HoverButton.css";
import { useContext, useState } from "react";

/**
 * @description Represents a hover button to change book's category or add new book
 */
const HoverButton = (props) => {
	const shelves = useContext(ShelvesContext);
	const [isClicked, setIsClicked] = useState(false);

	/**
	 * @description Handles change event on select
	 * @param {object} event
	 */
	const handleChangeBookShelf = (event) => {
		props.changeBookShelf(event.target.value);
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
					defaultValue={props.shelf}
					onChange={handleChangeBookShelf}>
					<option disabled>Move to...</option>
					{shelves.map((shelf) => (
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
