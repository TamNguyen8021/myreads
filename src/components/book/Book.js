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
			{props?.subtitle && <div className='book-subtitle'>{props.subtitle}</div>}
			{props?.authors &&
				props.authors.map((author, index) => (
					<div
						key={index + Math.random() * 100}
						className='book-authors'>
						{author}
					</div>
				))}
		</div>
	);
};

export default Book;
