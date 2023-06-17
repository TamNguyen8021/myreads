import "css/BookShelf.css";

/**
 * @description Represents a book shelf
 */
const BookShelf = (props) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{props.name}</h2>
			{props?.children?.length ? (
				<div className="bookshelf-books">
					<ol className="books-grid">{props.children}</ol>
				</div>
			) : null}
		</div>
	);
};

export default BookShelf;
