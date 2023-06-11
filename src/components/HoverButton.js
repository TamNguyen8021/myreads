import 'css/HoverButton.css';
import { useContext } from 'react';
import CategoriesContext from './CategoriesContext';

/**
 * @description Represents a hover button to change book's category or add new book
 */
const HoverButton = (props) => {
	const categories = useContext(CategoriesContext);

	return (
		<div className='book-shelf-changer'>
			<select>
				<option
					value='none'
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
				<option value='none'>None</option>
			</select>
		</div>
	);
};

export default HoverButton;
