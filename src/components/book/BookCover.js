/**
 * @description Represents a book's cover image
 */
const BookCover = (props) => {
	return (
		<div
			className='book-cover'
			style={{
				backgroundImage: `${props.cover}`,
			}}></div>
	);
};

export default BookCover;
