import 'css/BookShelf.css';

/**
 * @description Represents a book shelf
 */
const BookShelf = (props) => {
	return (
		<div className='bookshelf'>
			{props?.name && <h2 className='bookshelf-title'>{props.name}</h2>}
			{props?.children && (
				<div className='bookshelf-books'>
					<ol className='books-grid'>{props.children}</ol>
				</div>
			)}
		</div>
	);
};

export default BookShelf;
