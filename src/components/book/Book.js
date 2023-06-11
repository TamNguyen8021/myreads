import 'css/Book.css';
import BookCover from './BookCover';
import HoverButton from 'components/HoverButton';

/**
 * @description Represents a book
 */
const Book = (props) => {
	return (
		<div className='book'>
			<div className='book-top'>
				{props?.cover && <BookCover cover={props.cover} />}
				<HoverButton />
			</div>
			{props?.title && <div className='book-title'>{props.title}</div>}
			{props?.author && <div className='book-authors'>{props.author}</div>}
		</div>
	);
};

export default Book;
