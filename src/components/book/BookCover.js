import "css/BookCover.css";

/**
 * @description Represents a book's cover image
 */
const BookCover = (props) => {
	return (
		<div>
			<img
				className="book-cover"
				src={props.cover}
				alt="Book's thumbnail"
			/>
		</div>
	);
};

export default BookCover;
