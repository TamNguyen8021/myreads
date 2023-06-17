import "css/HoverButton.css";
import { useContext, useState } from "react";
import CategoriesContext from "../context/CategoriesContext";

/**
 * @description Represents a hover button to change book's category or add new book
 */
const HoverButton = (props) => {
	const categories = useContext(CategoriesContext);
	const [isClicked, setIsClicked] = useState(false);

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
					defaultValue={props?.shelf}
					onChange={handleChangeBookShelf}>
					<option
						value="none"
						disabled>
						Move to...
					</option>
					{categories?.map((category) => (
						<option
							key={category?.id}
							value={category?.id}>
							{category?.name}
						</option>
					))}
				</select>
			}
		</div>
	);
};

export default HoverButton;
